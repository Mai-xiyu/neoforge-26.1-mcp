# FeatureFlagRegistry

**Package:** `net.minecraft.world.flag`
**Type:** class

## Methods

### FeatureFlagRegistry

```java
 FeatureFlagRegistry(FeatureFlagUniverse p_249715_, FeatureFlagSet p_249277_, Map<ResourceLocation, FeatureFlag> p_249557_)
```

**Parameters:**

- `p_249715_` (`FeatureFlagUniverse`)
- `p_249277_` (`FeatureFlagSet`)
- `p_249557_` (`Map<ResourceLocation, FeatureFlag>`)

**Returns:** ``

### isSubset

```java
public boolean isSubset(FeatureFlagSet p_251939_)
```

**Parameters:**

- `p_251939_` (`FeatureFlagSet`)

**Returns:** `public boolean`

### allFlags

```java
public FeatureFlagSet allFlags()
```

**Returns:** `public FeatureFlagSet`

### fromNames

```java
public FeatureFlagSet fromNames(Iterable<ResourceLocation> p_250759_)
```

**Parameters:**

- `p_250759_` (`Iterable<ResourceLocation>`)

**Returns:** `public FeatureFlagSet`

### subset

```java
public FeatureFlagSet subset(FeatureFlag[]... p_252295_)
```

**Parameters:**

- `p_252295_` (`FeatureFlag[]...`)

**Returns:** `public FeatureFlagSet`

### fromNames

```java
public FeatureFlagSet fromNames(Iterable<ResourceLocation> p_251769_, Consumer<ResourceLocation> p_251521_)
```

**Parameters:**

- `p_251769_` (`Iterable<ResourceLocation>`)
- `p_251521_` (`Consumer<ResourceLocation>`)

**Returns:** `public FeatureFlagSet`

### toNames

```java
public Set<ResourceLocation> toNames(FeatureFlagSet p_251153_)
```

**Parameters:**

- `p_251153_` (`FeatureFlagSet`)

**Returns:** `public Set<ResourceLocation>`

### codec

```java
public Codec<FeatureFlagSet> codec()
```

**Returns:** `public Codec<FeatureFlagSet>`

### getFlag

```java
public FeatureFlag getFlag(ResourceLocation name)
```

**Parameters:**

- `name` (`ResourceLocation`)

**Returns:** `public FeatureFlag`

### getAllFlags

```java
public Map<ResourceLocation, FeatureFlag> getAllFlags()
```

**Returns:** `public Map<ResourceLocation, FeatureFlag>`

### hasAnyModdedFlags

```java
public boolean hasAnyModdedFlags()
```

**Returns:** `public boolean`

### Builder

```java
public Builder(String p_251576_)
```

**Parameters:**

- `p_251576_` (`String`)

**Returns:** `public`

### createVanilla

```java
public FeatureFlag createVanilla(String p_251782_)
```

**Parameters:**

- `p_251782_` (`String`)

**Returns:** `public FeatureFlag`

### create

```java
public FeatureFlag create(ResourceLocation p_250098_)
```

**Parameters:**

- `p_250098_` (`ResourceLocation`)

**Returns:** `FeatureFlag`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
public FeatureFlag create(ResourceLocation p_250098_, boolean modded)
```

**Parameters:**

- `p_250098_` (`ResourceLocation`)
- `modded` (`boolean`)

**Returns:** `public FeatureFlag`

### IllegalStateException

```java
throw new IllegalStateException("Too many feature flags")
```

**Parameters:**

- `flags"` (`"Too many feature`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate feature flag " + p_250098_)
```

**Parameters:**

- `p_250098_` (`"Duplicate feature flag " +`)

**Returns:** `throw new`

### build

```java
public FeatureFlagRegistry build()
```

**Returns:** `public FeatureFlagRegistry`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
