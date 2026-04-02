# BlockColors

**Package:** `net.minecraft.client.color.block`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### createDefault

```java
public static BlockColors createDefault()
```

**Returns:** `public static BlockColors`

### getColor

```java
public int getColor(BlockState p_92583_, Level p_92584_, BlockPos p_92585_)
```

**Parameters:**

- `p_92583_` (`BlockState`)
- `p_92584_` (`Level`)
- `p_92585_` (`BlockPos`)

**Returns:** `public int`

### getColor

```java
public int getColor(BlockState p_92578_, BlockAndTintGetter p_92579_, BlockPos p_92580_, int p_92581_)
```

**Parameters:**

- `p_92578_` (`BlockState`)
- `p_92579_` (`BlockAndTintGetter`)
- `p_92580_` (`BlockPos`)
- `p_92581_` (`int`)

**Returns:** `public int`

### register

```java
public void register(BlockColor p_92590_, Block[]... p_92591_)
```

**Parameters:**

- `p_92590_` (`BlockColor`)
- `p_92591_` (`Block[]...`)

### addColoringStates

```java
private void addColoringStates(Set<Property<?>> p_92593_, Block[]... p_92594_)
```

**Parameters:**

- `p_92593_` (`Set<Property<?>>`)
- `p_92594_` (`Block[]...`)

**Returns:** `private void`

### addColoringState

```java
private void addColoringState(Property<?> p_92587_, Block[]... p_92588_)
```

**Parameters:**

- `p_92587_` (`Property<?>`)
- `p_92588_` (`Block[]...`)

**Returns:** `private void`

### getColoringProperties

```java
public Set<Property<?>> getColoringProperties(Block p_92576_)
```

**Parameters:**

- `p_92576_` (`Block`)

**Returns:** `public Set<Property<?>>`
