# Coding Conventions


<br>


## Python

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


<br>


## C#

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
