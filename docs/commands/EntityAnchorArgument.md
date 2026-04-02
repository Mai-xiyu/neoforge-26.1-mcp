# EntityAnchorArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<EntityAnchorArgument.Anchor>`

## Methods

### getAnchor

```java
public static EntityAnchorArgument.Anchor getAnchor(CommandContext<CommandSourceStack> p_90354_, String p_90355_)
```

**Parameters:**

- `p_90354_` (`CommandContext<CommandSourceStack>`)
- `p_90355_` (`String`)

**Returns:** `public static EntityAnchorArgument.Anchor`

### anchor

```java
public static EntityAnchorArgument anchor()
```

**Returns:** `public static EntityAnchorArgument`

### EntityAnchorArgument

```java
return new EntityAnchorArgument()
```

**Returns:** `return new`

### parse

```java
public EntityAnchorArgument.Anchor parse(StringReader p_90352_)
```

**Parameters:**

- `p_90352_` (`StringReader`)

**Returns:** `public EntityAnchorArgument.Anchor`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_90360_, SuggestionsBuilder p_90361_)
```

**Parameters:**

- `p_90360_` (`CommandContext<S>`)
- `p_90361_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### Anchor

```java
private Anchor(String p_90374_, BiFunction<Vec3, Entity, Vec3> p_90375_)
```

**Parameters:**

- `p_90374_` (`String`)
- `p_90375_` (`BiFunction<Vec3, Entity, Vec3>`)

**Returns:** `private`

### getByName

```java
public static EntityAnchorArgument.Anchor getByName(String p_90385_)
```

**Parameters:**

- `p_90385_` (`String`)

**Returns:** `EntityAnchorArgument.Anchor`

### apply

```java
public Vec3 apply(Entity p_90378_)
```

**Parameters:**

- `p_90378_` (`Entity`)

**Returns:** `public Vec3`

### apply

```java
public Vec3 apply(CommandSourceStack p_90380_)
```

**Parameters:**

- `p_90380_` (`CommandSourceStack`)

**Returns:** `public Vec3`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Anchor` | enum |  |
