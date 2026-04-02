# ServerAdvancementManager

**Package:** `net.minecraft.server`
**Type:** class
**Extends:** `SimpleJsonResourceReloadListener`
**Side:** 🖧 Server

## Methods

### ServerAdvancementManager

```java
public ServerAdvancementManager(HolderLookup.Provider p_323943_)
```

**Parameters:**

- `p_323943_` (`HolderLookup.Provider`)

**Returns:** `public`

### apply

```java
protected void apply(Map<ResourceLocation, JsonElement> p_136034_, ResourceManager p_136035_, ProfilerFiller p_136036_)
```

**Parameters:**

- `p_136034_` (`Map<ResourceLocation, JsonElement>`)
- `p_136035_` (`ResourceManager`)
- `p_136036_` (`ProfilerFiller`)

**Returns:** `protected void`

### validate

```java
private void validate(ResourceLocation p_312696_, Advancement p_312110_)
```

**Parameters:**

- `p_312696_` (`ResourceLocation`)
- `p_312110_` (`Advancement`)

**Returns:** `private void`

### get

```java
public AdvancementHolder get(ResourceLocation p_301079_)
```

**Parameters:**

- `p_301079_` (`ResourceLocation`)

**Returns:** `AdvancementHolder`

### tree

```java
public AdvancementTree tree()
```

**Returns:** `public AdvancementTree`

### getAllAdvancements

```java
public Collection<AdvancementHolder> getAllAdvancements()
```

**Returns:** `public Collection<AdvancementHolder>`
