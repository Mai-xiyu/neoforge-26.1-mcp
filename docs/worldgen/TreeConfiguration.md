# TreeConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TreeConfiguration>` |  |
| `trunkProvider` | `BlockStateProvider` |  |
| `dirtProvider` | `BlockStateProvider` |  |
| `trunkPlacer` | `TrunkPlacer` |  |
| `foliageProvider` | `BlockStateProvider` |  |
| `foliagePlacer` | `FoliagePlacer` |  |
| `rootPlacer` | `Optional<RootPlacer>` |  |
| `minimumSize` | `FeatureSize` |  |
| `decorators` | `List<TreeDecorator>` |  |
| `ignoreVines` | `boolean` |  |
| `forceDirt` | `boolean` |  |
| `trunkProvider` | `BlockStateProvider` |  |
| `foliageProvider` | `BlockStateProvider` |  |

## Methods

### TreeConfiguration

```java
protected TreeConfiguration(BlockStateProvider p_225457_, TrunkPlacer p_225458_, BlockStateProvider p_225459_, FoliagePlacer p_225460_, Optional<RootPlacer> p_225461_, BlockStateProvider p_225462_, FeatureSize p_225463_, List<TreeDecorator> p_225464_, boolean p_225465_, boolean p_225466_)
```

**Parameters:**

- `p_225457_` (`BlockStateProvider`)
- `p_225458_` (`TrunkPlacer`)
- `p_225459_` (`BlockStateProvider`)
- `p_225460_` (`FoliagePlacer`)
- `p_225461_` (`Optional<RootPlacer>`)
- `p_225462_` (`BlockStateProvider`)
- `p_225463_` (`FeatureSize`)
- `p_225464_` (`List<TreeDecorator>`)
- `p_225465_` (`boolean`)
- `p_225466_` (`boolean`)

**Returns:** `protected`

### TreeConfigurationBuilder

```java
public TreeConfigurationBuilder(BlockStateProvider p_225481_, TrunkPlacer p_225482_, BlockStateProvider p_225483_, FoliagePlacer p_225484_, Optional<RootPlacer> p_225485_, FeatureSize p_225486_)
```

**Parameters:**

- `p_225481_` (`BlockStateProvider`)
- `p_225482_` (`TrunkPlacer`)
- `p_225483_` (`BlockStateProvider`)
- `p_225484_` (`FoliagePlacer`)
- `p_225485_` (`Optional<RootPlacer>`)
- `p_225486_` (`FeatureSize`)

**Returns:** `public`

### TreeConfigurationBuilder

```java
public TreeConfigurationBuilder(BlockStateProvider p_191359_, TrunkPlacer p_191360_, BlockStateProvider p_191361_, FoliagePlacer p_191362_, FeatureSize p_191363_)
```

**Parameters:**

- `p_191359_` (`BlockStateProvider`)
- `p_191360_` (`TrunkPlacer`)
- `p_191361_` (`BlockStateProvider`)
- `p_191362_` (`FoliagePlacer`)
- `p_191363_` (`FeatureSize`)

**Returns:** `public`

### dirt

```java
public TreeConfiguration.TreeConfigurationBuilder dirt(BlockStateProvider p_161261_)
```

**Parameters:**

- `p_161261_` (`BlockStateProvider`)

**Returns:** `public TreeConfiguration.TreeConfigurationBuilder`

### decorators

```java
public TreeConfiguration.TreeConfigurationBuilder decorators(List<TreeDecorator> p_68250_)
```

**Parameters:**

- `p_68250_` (`List<TreeDecorator>`)

**Returns:** `public TreeConfiguration.TreeConfigurationBuilder`

### ignoreVines

```java
public TreeConfiguration.TreeConfigurationBuilder ignoreVines()
```

**Returns:** `public TreeConfiguration.TreeConfigurationBuilder`

### forceDirt

```java
public TreeConfiguration.TreeConfigurationBuilder forceDirt()
```

**Returns:** `public TreeConfiguration.TreeConfigurationBuilder`

### build

```java
public TreeConfiguration build()
```

**Returns:** `public TreeConfiguration`

### TreeConfiguration

```java
return new TreeConfiguration()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TreeConfigurationBuilder` | class |  |
