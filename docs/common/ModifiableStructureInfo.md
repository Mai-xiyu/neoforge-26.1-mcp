# ModifiableStructureInfo

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class

## Description

Holds lazy-evaluable modified structure info.
Memoizers are not used because it's important to return null
without evaluating the structure info if it's accessed outside of a server context.

## Methods

### ModifiableStructureInfo

```java
public public ModifiableStructureInfo(StructureInfo originalStructureInfo)
```

**Parameters:**

- `originalStructureInfo` (`StructureInfo`)

**Returns:** `public`

### get

```java
public StructureInfo get()
```

**Returns:** `StructureInfo`

### getOriginalStructureInfo

```java
public StructureInfo getOriginalStructureInfo()
```

**Returns:** `StructureInfo`

### getModifiedStructureInfo

```java
public StructureInfo getModifiedStructureInfo()
```

**Returns:** `StructureInfo`

### applyStructureModifiers

```java
.Internal
    public void applyStructureModifiers(Holder<Structure> structure, List<StructureModifier> structureModifiers)
```

**Parameters:**

- `structure` (`Holder<Structure>`)
- `structureModifiers` (`List<StructureModifier>`)

**Returns:** `.Internal
    public void`

### StructureInfo

```java
public record StructureInfo(StructureSettings structureSettings)
```

**Parameters:**

- `structureSettings` (`StructureSettings`)

**Returns:** `record`

### copyOf

```java
public static Builder copyOf(StructureInfo original)
```

**Parameters:**

- `original` (`StructureInfo`)

**Returns:** `Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Builder

```java
private Builder(StructureSettingsBuilder structureSettings)
```

**Parameters:**

- `structureSettings` (`StructureSettingsBuilder`)

**Returns:** `private`

### build

```java
public StructureInfo build()
```

**Returns:** `public StructureInfo`

### getStructureSettings

```java
public StructureSettingsBuilder getStructureSettings()
```

**Returns:** `public StructureSettingsBuilder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StructureInfo` | record |  |
| `Builder` | class |  |
