# PieceBeardifierModifier

**Package:** `net.neoforged.neoforge.common.world`
**Type:** interface

## Description

Implement this interface in a `net.minecraft.world.level.levelgen.structure.StructurePiece` class extension to modify its `net.minecraft.world.level.levelgen.Beardifier` behavior.

## Methods

### getBeardifierBox

```java
BoundingBox getBeardifierBox()
```

**Returns:** `BoundingBox`

### getTerrainAdjustment

```java
TerrainAdjustment getTerrainAdjustment()
```

**Returns:** `TerrainAdjustment`

### getGroundLevelDelta

```java
int getGroundLevelDelta()
```

**Returns:** `int`
