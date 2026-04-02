# NeoForgeMod

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Annotations:** `@Mod(NeoForgeVersion.MOD_ID)`, `@SuppressWarnings("unused")`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VERSION_CHECK_CAT` | `String` |  |
| `SWIM_SPEED` | `Holder<Attribute>` |  |
| `NAMETAG_DISTANCE` | `Holder<Attribute>` |  |

## Methods

### enableMilkFluid

```java
public static final void enableMilkFluid()
```

### enableMergedAttributeTooltips

```java
public static void enableMergedAttributeTooltips()
```

### enableProperFilenameValidation

```java
public static void enableProperFilenameValidation()
```

### getProperFilenameValidation

```java
public static boolean getProperFilenameValidation()
```

**Returns:** `public static boolean`

### shouldMergeAttributeTooltips

```java
public static boolean shouldMergeAttributeTooltips()
```

**Returns:** `public static boolean`

### NeoForgeMod

```java
public NeoForgeMod(IEventBus modEventBus, Dist dist, ModContainer container)
```

**Parameters:**

- `modEventBus` (`IEventBus`)
- `dist` (`Dist`)
- `container` (`ModContainer`)

**Returns:** `public`

### preInit

```java
public void preInit(FMLCommonSetupEvent evt)
```

**Parameters:**

- `evt` (`FMLCommonSetupEvent`)

**Returns:** `public void`

### loadComplete

```java
public void loadComplete(FMLLoadCompleteEvent event)
```

**Parameters:**

- `event` (`FMLLoadCompleteEvent`)

**Returns:** `public void`

### serverStopping

```java
public void serverStopping(ServerStoppingEvent evt)
```

**Parameters:**

- `evt` (`ServerStoppingEvent`)

**Returns:** `public void`

### gatherData

```java
public void gatherData(GatherDataEvent event)
```

**Parameters:**

- `event` (`GatherDataEvent`)

**Returns:** `public void`

### registerFluids

```java
done in an event instead of deferred to only enable if a mod requests it
    public void registerFluids(RegisterEvent event)
```

**Parameters:**

- `event` (`RegisterEvent`)

**Returns:** `done in an event instead of deferred to only enable if a mod requests it
    public void`

### registerLootData

```java
public void registerLootData(RegisterEvent event)
```

**Parameters:**

- `event` (`RegisterEvent`)

**Returns:** `public void`

### registerPermissionNodes

```java
public void registerPermissionNodes(PermissionGatherEvent.Nodes event)
```

**Parameters:**

- `event` (`PermissionGatherEvent.Nodes`)

**Returns:** `public void`

### isPRBuild

```java
private static boolean isPRBuild(String neoVersion)
```

**Parameters:**

- `neoVersion` (`String`)

**Returns:** `private static boolean`

### isPRBuild

```java
public static boolean isPRBuild()
```

**Returns:** `public static boolean`
