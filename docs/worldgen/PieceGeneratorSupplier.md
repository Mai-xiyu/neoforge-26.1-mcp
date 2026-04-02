# PieceGeneratorSupplier

**Package:** `net.minecraft.world.level.levelgen.structure.pieces`
**Type:** interface<C extends FeatureConfiguration>
**Annotations:** `@FunctionalInterface`

## Methods

### createGenerator

```java
Optional<PieceGenerator<C>> createGenerator(PieceGeneratorSupplier.Context<C> p_197348_)
```

**Parameters:**

- `p_197348_` (`PieceGeneratorSupplier.Context<C>`)

**Returns:** `Optional<PieceGenerator<C>>`

### simple

```java
<C extends FeatureConfiguration> static <C extends FeatureConfiguration> PieceGeneratorSupplier<C> simple(Predicate<PieceGeneratorSupplier.Context<C>> p_197350_, PieceGenerator<C> p_197351_)
```

**Parameters:**

- `p_197350_` (`Predicate<PieceGeneratorSupplier.Context<C>>`)
- `p_197351_` (`PieceGenerator<C>`)

**Returns:** `static <C extends FeatureConfiguration> PieceGeneratorSupplier<C>`

### checkForBiomeOnTop

```java
<C extends FeatureConfiguration> static <C extends FeatureConfiguration> Predicate<PieceGeneratorSupplier.Context<C>> checkForBiomeOnTop(Heightmap.Types p_197346_)
```

**Parameters:**

- `p_197346_` (`Heightmap.Types`)

**Returns:** `static <C extends FeatureConfiguration> Predicate<PieceGeneratorSupplier.Context<C>>`

### validBiomeOnTop

```java
public boolean validBiomeOnTop(Heightmap.Types p_197381_)
```

**Parameters:**

- `p_197381_` (`Heightmap.Types`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Context` | record |  |
