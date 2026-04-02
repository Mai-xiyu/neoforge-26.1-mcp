# FireworkShapeFactoryRegistry

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client

## Description

Keeps track of custom firework shape types, because Particle is client side only this can't be on the Shape itself.
So sometime during your client initalization call register.

## Methods

### build

```java
void build(FireworkParticles.Starter starter, boolean trail, boolean flicker, int[] colors, int[] fadeColors)
```

**Parameters:**

- `starter` (`FireworkParticles.Starter`)
- `trail` (`boolean`)
- `flicker` (`boolean`)
- `colors` (`int[]`)
- `fadeColors` (`int[]`)

### register

```java
public static void register(FireworkExplosion.Shape shape, Factory factory)
```

**Parameters:**

- `shape` (`FireworkExplosion.Shape`)
- `factory` (`Factory`)

**Returns:** `public static void`

### get

```java
public static Factory get(FireworkExplosion.Shape shape)
```

**Parameters:**

- `shape` (`FireworkExplosion.Shape`)

**Returns:** `Factory`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Factory` | interface |  |
