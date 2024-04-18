# Coding Conventions

It’s getting way too difficult to keep track of all this in my mind, so I need somewhere to standardardise it for consistency.


<br>


## Aspects

### Indentation

| language | spaces |
| :------- | :----- |
| Python | 2 |
| C# | 4 |
| HTML | 2 |
| CSS | 2 |
| JavaScript | 2 |
| SQL | 2 |
| JSON | 2 |
| YAML | 2 |
| supcode | 3 |



<br>


## Reference

### Python

```py
'''
project
version
'''

class PascalCase:
  '''A docstring.'''

  ## SPACE CAPS ##
  SNAKE_CAPS: const

  ## SPACE CAPS ##
  def snake_case(snake_case: param = default) -> type:
    '''Write a docstring.'''

    snake_case: var

    return snake_case

  @ snake_case
  def snake_case(
    snake_case: param = default,
    snake_case: param = default,
  ) -> type:
    '''Write a docstring.

    | parameter | type | notes |
    | :-------- | :--- | :---- |
    | `snake_case` | `type` / `tuple, tuple` / `generic[type]` | Sentence. |
    '''

    if (
      cond and
      cond
    ):
      for each in _:
        snake_case(snake_case = snake_case)
```

### C#

```cs
/// project
/// version
/// by Sup#2.0 (@Sup2point0)
/// Last updated: date
/// Available at: <https://github.com/Sup2point0/project>

/// A docstring.
class PascalCase
{
    #region SPACE CAPS

    const PascalCase;

    #endregion

    #region SPACE CAPS

    /// Writes a docstring.
    void PascalCase(param camelCase = default)
    {
        var camelCase;
    }

    /// Writes a docstring.
    [PascalCase]
    void PascalCase(
        param camelCase = default,
        param camelCase = default
    )
    {
        if (
            cond &&
            cond
        ) {
            for {
                PascalCase(camelCase: arg);
            }
        }
    }

    #endregion
}
```

### Unity

| entity | case | instance | notes |
| :----- | :--- | :------- | :---- |
| folder | `PascalCase` | `Scripts/` | |
| file | `kebab-case` | `game-executive.cs` | |
| editor object | `Title Case` | `Game Executive` | |
| script component | `PascalCase` | `GameExec` | |
| prefab field | `camelCasePrefab` | `objectPrefab` | |

| term | instance | notes |
| :--- | :------- | :---- |
| `Executive` `Exec` | `GameExec` `AudioExec` | Manages a particular feature or aspect. |
| `Spawner` `Origin` | `ParticleSpawner` | Purely handles creation of objects. Often upgraded into an `Executive`. |
