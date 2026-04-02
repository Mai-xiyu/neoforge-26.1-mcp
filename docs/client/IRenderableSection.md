# IRenderableSection

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

Describes a chunk section that may be rendered on the GPU.
The renderer may choose to reuse a common backing object
for this interface under the hood (for performance reasons),
so the `IRenderableSection` and any objects its methods
return are not guaranteed to be immutable or valid after
exiting the scope in which its provided.

## Methods

### getRenderOrigin

```java
BlockPos getRenderOrigin()
```

**Returns:** `BlockPos`

### getBoundingBox

```java
AABB getBoundingBox()
```

**Returns:** `AABB`

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`
