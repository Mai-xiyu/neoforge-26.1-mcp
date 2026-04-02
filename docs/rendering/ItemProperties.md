# ItemProperties

**Package:** `net.minecraft.client.renderer.item`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### registerGeneric

```java
private static ClampedItemPropertyFunction registerGeneric(ResourceLocation p_174582_, ClampedItemPropertyFunction p_174583_)
```

**Parameters:**

- `p_174582_` (`ResourceLocation`)
- `p_174583_` (`ClampedItemPropertyFunction`)

**Returns:** `private static ClampedItemPropertyFunction`

### registerGeneric

```java
public static ItemPropertyFunction registerGeneric(ResourceLocation p_174582_, ItemPropertyFunction p_174583_)
```

**Parameters:**

- `p_174582_` (`ResourceLocation`)
- `p_174583_` (`ItemPropertyFunction`)

**Returns:** `public static ItemPropertyFunction`

### registerCustomModelData

```java
private static void registerCustomModelData(ItemPropertyFunction p_174580_)
```

**Parameters:**

- `p_174580_` (`ItemPropertyFunction`)

**Returns:** `private static void`

### register

```java
private static void register(Item p_174571_, ResourceLocation p_174572_, ClampedItemPropertyFunction p_174573_)
```

**Parameters:**

- `p_174571_` (`Item`)
- `p_174572_` (`ResourceLocation`)
- `p_174573_` (`ClampedItemPropertyFunction`)

**Returns:** `private static void`

### register

```java
public static void register(Item p_174571_, ResourceLocation p_174572_, ItemPropertyFunction p_174573_)
```

**Parameters:**

- `p_174571_` (`Item`)
- `p_174572_` (`ResourceLocation`)
- `p_174573_` (`ItemPropertyFunction`)

**Returns:** `public static void`

### getProperty

```java
public static ItemPropertyFunction getProperty(ItemStack p_336078_, ResourceLocation p_117831_)
```

**Parameters:**

- `p_336078_` (`ItemStack`)
- `p_117831_` (`ResourceLocation`)

**Returns:** `ItemPropertyFunction`

### registerGeneric

```java
 registerGeneric()
```

**Returns:** ``

### ClampedItemPropertyFunction

```java
, new ClampedItemPropertyFunction()
```

**Returns:** `, new`

### unclampedCall

```java
public float unclampedCall(ItemStack p_174665_, ClientLevel p_174666_, LivingEntity p_174667_, int p_174668_)
```

**Parameters:**

- `p_174665_` (`ItemStack`)
- `p_174666_` (`ClientLevel`)
- `p_174667_` (`LivingEntity`)
- `p_174668_` (`int`)

**Returns:** `float`

### wobble

```java
private double wobble(Level p_117904_, double p_117905_)
```

**Parameters:**

- `p_117904_` (`Level`)
- `p_117905_` (`double`)

**Returns:** `private double`
