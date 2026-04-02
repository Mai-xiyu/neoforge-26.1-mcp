# PackCompatibility

**Package:** `net.minecraft.server.packs.repository`
**Type:** enum
**Side:** 🖧 Server

## Methods

### COMPATIBLE

```java
, COMPATIBLE()
```

**Returns:** `,`

### PackCompatibility

```java
private PackCompatibility(String p_10488_)
```

**Parameters:**

- `p_10488_` (`String`)

**Returns:** `private`

### isCompatible

```java
public boolean isCompatible()
```

**Returns:** `public boolean`

### forVersion

```java
public static PackCompatibility forVersion(InclusiveRange<Integer> p_294404_, int p_294597_)
```

**Parameters:**

- `p_294404_` (`InclusiveRange<Integer>`)
- `p_294597_` (`int`)

**Returns:** `public static PackCompatibility`

### getDescription

```java
public Component getDescription()
```

**Returns:** `public Component`

### getConfirmation

```java
public Component getConfirmation()
```

**Returns:** `public Component`
