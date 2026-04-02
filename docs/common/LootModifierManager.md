# LootModifierManager

**Package:** `net.neoforged.neoforge.common.loot`
**Type:** class
**Extends:** `SimpleJsonResourceReloadListener`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LOGGER` | `Logger` |  |

## Methods

### LootModifierManager

```java
public LootModifierManager()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### prepare

```java
protected Map<ResourceLocation, JsonElement> prepare(ResourceManager resourceManager, ProfilerFiller profilerFiller)
```

**Parameters:**

- `resourceManager` (`ResourceManager`)
- `profilerFiller` (`ProfilerFiller`)

**Returns:** `Map<ResourceLocation, JsonElement>`

### apply

```java
protected void apply(Map<ResourceLocation, JsonElement> resourceList, ResourceManager resourceManagerIn, ProfilerFiller profilerIn)
```

**Parameters:**

- `resourceList` (`Map<ResourceLocation, JsonElement>`)
- `resourceManagerIn` (`ResourceManager`)
- `profilerIn` (`ProfilerFiller`)

### getAllLootMods

```java
public Collection<IGlobalLootModifier> getAllLootMods()
```

**Returns:** `Collection<IGlobalLootModifier>`
