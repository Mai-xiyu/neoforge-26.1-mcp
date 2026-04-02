# AttributeCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_251026_, CommandBuildContext p_250936_)
```

**Parameters:**

- `p_251026_` (`CommandDispatcher<CommandSourceStack>`)
- `p_250936_` (`CommandBuildContext`)

**Returns:** `public static void`

### getAttributeInstance

```java
private static AttributeInstance getAttributeInstance(Entity p_252177_, Holder<Attribute> p_249942_)
```

**Parameters:**

- `p_252177_` (`Entity`)
- `p_249942_` (`Holder<Attribute>`)

**Returns:** `private static AttributeInstance`

### getLivingEntity

```java
private static LivingEntity getLivingEntity(Entity p_136440_)
```

**Parameters:**

- `p_136440_` (`Entity`)

**Returns:** `private static LivingEntity`

### getEntityWithAttribute

```java
private static LivingEntity getEntityWithAttribute(Entity p_252105_, Holder<Attribute> p_248921_)
```

**Parameters:**

- `p_252105_` (`Entity`)
- `p_248921_` (`Holder<Attribute>`)

**Returns:** `private static LivingEntity`

### getAttributeValue

```java
private static int getAttributeValue(CommandSourceStack p_251776_, Entity p_249647_, Holder<Attribute> p_250986_, double p_251395_)
```

**Parameters:**

- `p_251776_` (`CommandSourceStack`)
- `p_249647_` (`Entity`)
- `p_250986_` (`Holder<Attribute>`)
- `p_251395_` (`double`)

**Returns:** `private static int`

### getAttributeBase

```java
private static int getAttributeBase(CommandSourceStack p_248780_, Entity p_251083_, Holder<Attribute> p_250388_, double p_250194_)
```

**Parameters:**

- `p_248780_` (`CommandSourceStack`)
- `p_251083_` (`Entity`)
- `p_250388_` (`Holder<Attribute>`)
- `p_250194_` (`double`)

**Returns:** `private static int`

### getAttributeModifier

```java
private static int getAttributeModifier(CommandSourceStack p_136464_, Entity p_136465_, Holder<Attribute> p_250680_, ResourceLocation p_350277_, double p_136468_)
```

**Parameters:**

- `p_136464_` (`CommandSourceStack`)
- `p_136465_` (`Entity`)
- `p_250680_` (`Holder<Attribute>`)
- `p_350277_` (`ResourceLocation`)
- `p_136468_` (`double`)

**Returns:** `private static int`

### setAttributeBase

```java
private static int setAttributeBase(CommandSourceStack p_248556_, Entity p_248620_, Holder<Attribute> p_249456_, double p_252212_)
```

**Parameters:**

- `p_248556_` (`CommandSourceStack`)
- `p_248620_` (`Entity`)
- `p_249456_` (`Holder<Attribute>`)
- `p_252212_` (`double`)

**Returns:** `private static int`

### addModifier

```java
private static int addModifier(CommandSourceStack p_136470_, Entity p_136471_, Holder<Attribute> p_251636_, ResourceLocation p_350414_, double p_136475_, AttributeModifier.Operation p_136476_)
```

**Parameters:**

- `p_136470_` (`CommandSourceStack`)
- `p_136471_` (`Entity`)
- `p_251636_` (`Holder<Attribute>`)
- `p_350414_` (`ResourceLocation`)
- `p_136475_` (`double`)
- `p_136476_` (`AttributeModifier.Operation`)

**Returns:** `private static int`

### removeModifier

```java
private static int removeModifier(CommandSourceStack p_136459_, Entity p_136460_, Holder<Attribute> p_250830_, ResourceLocation p_350686_)
```

**Parameters:**

- `p_136459_` (`CommandSourceStack`)
- `p_136460_` (`Entity`)
- `p_250830_` (`Holder<Attribute>`)
- `p_350686_` (`ResourceLocation`)

**Returns:** `private static int`

### getAttributeDescription

```java
private static Component getAttributeDescription(Holder<Attribute> p_250602_)
```

**Parameters:**

- `p_250602_` (`Holder<Attribute>`)

**Returns:** `private static Component`
