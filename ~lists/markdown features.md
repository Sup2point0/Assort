# Features I’d Love in Markdown
<!-- #SQUARK live!
| dest = lists/markdown-features
| desc = Markdown is absolutely awesome, but there are still some things I’d love to become standard in it.
| index = lists
| shard = #INDEX
-->

Markdown is absolutely awesome, but there are still some things I’d love to become standard in it.


<br>


## Tables Without Headers

<table>
  <tr>
    <td> this </td>
    <td> would </td>
    <td> be </td>
  </tr>
  <tr>
    <td> very </td>
    <td> nice </td>
    <td> tbh </td>
  </tr>
</table>

### Syntax
Honestly, this wouldn’t be too difficult to add, just omit the headers:

```md
| :--- | :---- | :-- |
| this | would | be  |
| very | nice  | tbh |
```

<br>


## Table Cell Span

<table>
  <tr>
    <td colspan="2"> an </td>
    <td> inbuilt </td>
    <td> </td>
  </tr>
  <tr>
    <td> way </td>
    <td rowspan="2"> to </td>
    <td> </td>
    <td> do </td>
  </tr>
  <tr>
    <td> this </td>
    <td colspan="2"> would </td>
  </tr>
  <tr>
    <td> be </td>
    <td colspan="2"> very </td>
    <td> nice </td>
  </tr>
</table>

### Syntax
```md
| :---- | :---- | :---- | :---- |
```


<br>


## Image Caption

Images often need a caption, and it’d be nice if there a nice conventional way to add one without hacks like `<div align="center">` or whatever.

### Syntax
```md
![picture](source)
> caption
```


<br>


## Quote Author

A way to add a right-align the source of a quote:

> The quick brown fox jumps over the lazy dog  
> &emsp;&emsp;&emsp;&emsp;&emsp; – Anon

### Syntax
```md
> The quick brown fox jumps over the lazy dog
- Anon
```


<br>
