# DimensionTransitionScreenManager

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client

## Methods

### init

```java
.Internal
    static void init()
```

**Returns:** `.Internal
    static void`

### getScreenFromLevel

```java
public static ReceivingLevelScreenFactory getScreenFromLevel(Level target, Level source)
```

**Parameters:**

- `target` (`Level`)
- `source` (`Level`)

**Returns:** `public static ReceivingLevelScreenFactory`

### getScreen

```java
transition screen should not appear in this case
            return getScreen()
```

**Returns:** `transition screen should not appear in this case
            return`

### getScreen

```java
public static ReceivingLevelScreenFactory getScreen(ResourceKey<Level> toDimension, ResourceKey<Level> fromDimension)
```

**Parameters:**

- `toDimension` (`ResourceKey<Level>`)
- `fromDimension` (`ResourceKey<Level>`)

**Returns:** `public static ReceivingLevelScreenFactory`

### create

```java
ReceivingLevelScreen create(BooleanSupplier supplier, ReceivingLevelScreen.Reason reason)
```

**Parameters:**

- `supplier` (`BooleanSupplier`)
- `reason` (`ReceivingLevelScreen.Reason`)

**Returns:** `ReceivingLevelScreen`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ReceivingLevelScreenFactory` | interface |  |
