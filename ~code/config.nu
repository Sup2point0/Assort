# Installed by:
# version = '0.108.0'


$env.config.buffer_editor = 'code'
$env.config.show_banner = false


## Sources

source ~/.zoxide.nu


## Prompt

const n = ansi 'n'

const WHITE       = $'($n)(ansi '#ffffff')'
const PINK        = $'($n)(ansi '#f190f1')'
const PINK_NOVA   = $'($n)(ansi '#ff0090')'
const LILAC       = $'($n)(ansi '#9090f1')'
const LILAC_CRESC = $'($n)(ansi '#c7c7ff')'
const MELLOW      = $'($n)(ansi '#fff0c0')'
const TEAL        = $'($n)(ansi '#40f190')'
const BLUE        = $'($n)(ansi '#4090f1')'
const BLUE_DARK   = $'($n)(ansi '#2070c1')'
const BLUE_FADE   = $'($n)(ansi '#003060')'

$env.PROMPT_COMMAND = {
    pwd
  | str replace 'C:\Users\sup' $'($PINK)~'
  | str replace '~\Desktop\dev\projects\' $'($PINK)*\'
  | str replace '~\Desktop\' $'~\($PINK)#\'
  | str replace --regex '(?<=\\)([^\\]+)?$' $'($MELLOW)$1'
  | str replace '\' $'($BLUE_FADE)/($LILAC_CRESC)' --all
}

$env.PROMPT_COMMAND_RIGHT = {
  let $in_git = ((git rev-parse --is-inside-work-tree o+e>| str trim) == 'true')
  let $branch = if ($in_git) { $'($LILAC)(git branch --show-current) ($BLUE_FADE)· ' } else { '' }
  let $stash_count = if ($in_git) { git rev-list --walk-reflogs --ignore-missing --count refs/stash } else { '0' }

  let $stash = (
    if ($stash_count) == '0' {
      ''
    } else {
      $'($PINK)($stash_count) ($WHITE)/ '
    }
  )

    date now
  | format date $' ($stash)($branch)($TEAL)%H:%M '
}

$env.TRANSIENT_PROMPT_COMMAND_RIGHT = null
$env.PROMPT_INDICATOR           = $'($BLUE_DARK)› '
$env.PROMPT_MULTILINE_INDICATOR = $'($BLUE_DARK).    '


## Theming

$env.config.color_config.hints     = '#70767c'
$env.config.color_config.header    = '#40f190'
$env.config.color_config.separator = '#003060'
$env.config.color_config.row_index = '#2070c1'
$env.config.color_config.filesize  = '#c7c7ff'
$env.config.color_config.datetime  = '#ffc720'
$env.config.color_config.string    = '#dddddd'


## Aliases / Standard

def --env cdir [dir] {
  mkdir $dir
  cd $dir
}

def --env "cbs" [...args] {
  clear
  cargo build ...$args
}
def --env "crs" [...args] {
  clear
  cargo run ...$args
}
def --env "cts" [...args] {
  clear
  cargo test ...$args
}
def --env "cargo checks" [...args] {
  clear
  cargo check ...$args
}
def --env "cargo benches" [...args] {
  clear
  cargo bench ...$args
}
def --env "cargo runback" [...args] {
  with-env { RUST_BACKTRACE: 1 } {
    cargo run ...$args
  }
}
def --env "cargo testback" [...args] {
  with-env { RUST_BACKTRACE: 1 } {
    cargo test ...$args
  }
}

alias nd  = npm run dev
alias ndx = npm run devx
alias nt  = npm run test
alias ntw = npm run testw
alias ntx = npm run testx

def --env "nts" [...args] {
  clear
  npm run test ...$args
}

def --env avid [] {
  print 'Launching Avidity...'
  z ~
  z builds
  cd (ls | sort-by modified --reverse | first | get name)
  Avidity.exe
}


## Aliases / Special

alias arch = archividian --config .internal/arv.json

alias ytmp3  = yt-dlp -x --audio-format mp3 --audio-quality 0
alias ytmp3i = yt-dlp -x --audio-format mp3 --audio-quality 0 -i

alias ngrok-hexadris = ngrok tcp --url=benumbingly-noncommendable-wai.ngrok-free.dev:2000 2000
