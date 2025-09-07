# A Library to Void Future Suffering
<!-- #SQUARK live! dev!
| dest = dev/solutions
| desc = An archive of technical issues I’ve faced throughout the years, and the solutions I eventually discovered
| style = dev
| index = dev
| shard = #INDEX / lists
| date = 2024 autumn
-->

Technical difficulties never go away, innit. There’s nothing like facing a problem you’ve had before, realising you’ve forgotten the solution, and being filled with regret at not noting it down. Back to the search engine it is, with rising desperation and panic as you struggle to find the solution you found off an archaic internet forum all those years ago.

Well, screw that. From now on we’ll archive every issue we face, no matter how trivial they seem, so that should they arise once more in future, we shall be prepared.

Of course, these are liable to become outdated themselves. But hey, one day 1 of these might swoop in to save the day, and it’ll all have been worth it.


<br>


## Symlink for Nested Unity `.vscode/`

| encountered | topics |
| :---------- | :----- |
| 2025 August | VSCode / Windows / Unity |

### Issue
- If Unity project is not repo root, `.vscode/` folder created by Unity will be nested, which VSCode can’t detect

### Solution
Create a symlink to map a `.vscode/` folder in the project root to the nested `.vscode/`.

Command line (as admin):

```bash
mklink /d <dest> <source>
```

### Sources
- AI LLM for solution
- [Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) for command


<br>


## Hanging `localhost` Port

| encountered | topics |
| :---------- | :----- |
| 2025 January 21 | VSCode / Windows / web / bug |

### Issue
- `npm run dev` started server on `localhost:5173`
- VSCode closed?
- `npm run dev` again now started server on `localhost:5174`
- No way to close or kill hanging terminal in VSCode

### Solution
Command line:

```bash
netstat -ano | findstr :8080
```

Look for `LISTENING` PID, then run:

```bash
taskkill /pid <PID> /F
```

### Newer Solution
Command line:

```bash
npx kill-port <PORT>
```

If multiple ports have been hanging:

```bash
npx kill-port 517*
```

### Notes

- Need `/F` to forcefully kill task

### Sources

- [StackOverflow<sup>↗</sup>](https://stackoverflow.com/questions/8688949/how-to-close-tcp-and-udp-ports-via-windows-command-line)


<br>


## Slideshow Background

| encountered | topics |
| :---------- | :----- |
| 2024 November 1 | Windows 11 / bug |

### Issue
- Set background to Slideshow
- Switched virtual desktops (Ctrl+Win+Left/Right)
- Background reverted to Spotlight??

### Solution
- Revert background to non-slideshow
- Restart computer
- Set background to desired slideshow
- Open registry editor to `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\VirtualDesktops\Desktops`
- Delete the `Wallpaper` key in each subdirectory’s entries (subdirectories represent virtual desktops)
- Restart computer
- Right click desktop » next background

### Sources
- [Microsoft Support Forum<sup>↗</sup>](https://answers.microsoft.com/en-us/windows/forum/all/my-desktop-background-keeps-switching-from/5ca94a33-7dae-494e-b36a-70eeafcbfae8?page=3)
