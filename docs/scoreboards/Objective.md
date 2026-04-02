# Objective

**Package:** `net.minecraft.world.scores`
**Type:** class

## Methods

### Objective

```java
public Objective(Scoreboard p_83308_, String p_83309_, ObjectiveCriteria p_83310_, Component p_83311_, ObjectiveCriteria.RenderType p_83312_, boolean p_313856_, NumberFormat p_313758_)
```

**Parameters:**

- `p_83308_` (`Scoreboard`)
- `p_83309_` (`String`)
- `p_83310_` (`ObjectiveCriteria`)
- `p_83311_` (`Component`)
- `p_83312_` (`ObjectiveCriteria.RenderType`)
- `p_313856_` (`boolean`)
- `p_313758_` (`NumberFormat`)

**Returns:** `public`

### getScoreboard

```java
public Scoreboard getScoreboard()
```

**Returns:** `public Scoreboard`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getCriteria

```java
public ObjectiveCriteria getCriteria()
```

**Returns:** `public ObjectiveCriteria`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### displayAutoUpdate

```java
public boolean displayAutoUpdate()
```

**Returns:** `public boolean`

### numberFormat

```java
public NumberFormat numberFormat()
```

**Returns:** `NumberFormat`

### numberFormatOrDefault

```java
public NumberFormat numberFormatOrDefault(NumberFormat p_313850_)
```

**Parameters:**

- `p_313850_` (`NumberFormat`)

**Returns:** `public NumberFormat`

### createFormattedDisplayName

```java
private Component createFormattedDisplayName()
```

**Returns:** `private Component`

### getFormattedDisplayName

```java
public Component getFormattedDisplayName()
```

**Returns:** `public Component`

### setDisplayName

```java
public void setDisplayName(Component p_83317_)
```

**Parameters:**

- `p_83317_` (`Component`)

**Returns:** `public void`

### getRenderType

```java
public ObjectiveCriteria.RenderType getRenderType()
```

**Returns:** `public ObjectiveCriteria.RenderType`

### setRenderType

```java
public void setRenderType(ObjectiveCriteria.RenderType p_83315_)
```

**Parameters:**

- `p_83315_` (`ObjectiveCriteria.RenderType`)

**Returns:** `public void`

### setDisplayAutoUpdate

```java
public void setDisplayAutoUpdate(boolean p_313703_)
```

**Parameters:**

- `p_313703_` (`boolean`)

**Returns:** `public void`

### setNumberFormat

```java
public void setNumberFormat(NumberFormat p_313942_)
```

**Parameters:**

- `p_313942_` (`NumberFormat`)

**Returns:** `public void`
