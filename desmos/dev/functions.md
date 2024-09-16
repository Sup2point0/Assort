# Standard Utility Functions
<!-- #SQUARK live!
| dest = desmos/dev/functions
| clean = braces
-->


<br>


## Ranges

### Step-Wise Range

$$
f_\text{srange} \left(
  s_\text{start},
  s_\text{stop},
  s_\text{step}
\right) =
\left[
  \left(\right)
  \space \text{for} \space
  i = \left[
    0 \, ... \,
    \text{floor}\left(
      \frac{s_\text{stop}}{s_\text{step}}
    \right)
  \right]
\right]
$$

Generate a list of numbers from $s_\text{start}$ up to (and including) $s_\text{stop}$ with difference $s_\text{step}$.

### Step-Wise Exclusive Range
$$
f_\text{sxrange}
$$

Generate a list of numbers from $s_\text{start}$ up to (but excluding) $s_\text{stop}$ with difference $s_\text{step}$.

### Linearly Spaced Ranged
$f_\text{nrange}$

### Linearly Spaced Exclusive Range
$$
f_\text{nxrange}
$$

Generate a list of $n$ numbers evenly spaced apart between $s_start$ and $s_stop$ (inclusive).

$$
f_\text{nrange}(1, 10, 10) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] \space \text{(10 element list)}
$$

### List Range
$$
f_\text{lrange}
$$

Generate a list of integers corresponding to the indices of a list.

### Step-Wise List Range
$$
f_\text{lsrange}
$$

Generate a list of integers corresponding to chunks of a list.

For instance, to iterate over every 3 items:

$$
L = [1 \, ... \, 9] \quad \text{(9 element list)}
$$

$$
I = f_\text{lsrange}(L, 3, 1) = [1, 4, 7] \quad \text{(3 element list)}
$$

$$
[L[i] for i = I] = [1, 4, 7] \quad \text{(3 element list)}
$$


<br>


## Rendering

### Line
$$
d_\text{line}
$$

### Circle
$$
d_\text{circle}
$$

### Rectangle
$$
d_\text{rect}
$$

### Regular Polygon
$$
d_\text{polygon}
$$

### Grid
$$
d_\text{grid}
$$

### Spike
$$
d_\text{spike}
$$


<br>
