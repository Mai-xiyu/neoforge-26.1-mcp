# AttributeSupplier

**Package:** `net.minecraft.world.entity.ai.attributes`
**Type:** class

## Methods

### AttributeSupplier

```java
 AttributeSupplier(Map<Holder<Attribute>, AttributeInstance> p_22243_)
```

**Parameters:**

- `p_22243_` (`Map<Holder<Attribute>, AttributeInstance>`)

**Returns:** ``

### getAttributeInstance

```java
private AttributeInstance getAttributeInstance(Holder<Attribute> p_316859_)
```

**Parameters:**

- `p_316859_` (`Holder<Attribute>`)

**Returns:** `private AttributeInstance`

### getValue

```java
public double getValue(Holder<Attribute> p_316336_)
```

**Parameters:**

- `p_316336_` (`Holder<Attribute>`)

**Returns:** `public double`

### getBaseValue

```java
public double getBaseValue(Holder<Attribute> p_316396_)
```

**Parameters:**

- `p_316396_` (`Holder<Attribute>`)

**Returns:** `public double`

### getModifierValue

```java
public double getModifierValue(Holder<Attribute> p_316754_, ResourceLocation p_350708_)
```

**Parameters:**

- `p_316754_` (`Holder<Attribute>`)
- `p_350708_` (`ResourceLocation`)

**Returns:** `public double`

### createInstance

```java
public AttributeInstance createInstance(Consumer<AttributeInstance> p_22251_, Holder<Attribute> p_316258_)
```

**Parameters:**

- `p_22251_` (`Consumer<AttributeInstance>`)
- `p_316258_` (`Holder<Attribute>`)

**Returns:** `AttributeInstance`

### builder

```java
public static AttributeSupplier.Builder builder()
```

**Returns:** `public static AttributeSupplier.Builder`

### hasAttribute

```java
public boolean hasAttribute(Holder<Attribute> p_316617_)
```

**Parameters:**

- `p_316617_` (`Holder<Attribute>`)

**Returns:** `public boolean`

### hasModifier

```java
public boolean hasModifier(Holder<Attribute> p_316471_, ResourceLocation p_350394_)
```

**Parameters:**

- `p_316471_` (`Holder<Attribute>`)
- `p_350394_` (`ResourceLocation`)

**Returns:** `public boolean`

### Builder

```java
public Builder()
```

**Returns:** `public`

### Builder

```java
public Builder(AttributeSupplier attributeMap)
```

**Parameters:**

- `attributeMap` (`AttributeSupplier`)

**Returns:** `public`

### combine

```java
public void combine(Builder other)
```

**Parameters:**

- `other` (`Builder`)

**Returns:** `public void`

### hasAttribute

```java
public boolean hasAttribute(Holder<Attribute> attribute)
```

**Parameters:**

- `attribute` (`Holder<Attribute>`)

**Returns:** `public boolean`

### create

```java
private AttributeInstance create(Holder<Attribute> p_316369_)
```

**Parameters:**

- `p_316369_` (`Holder<Attribute>`)

**Returns:** `private AttributeInstance`

### add

```java
public AttributeSupplier.Builder add(Holder<Attribute> p_316658_)
```

**Parameters:**

- `p_316658_` (`Holder<Attribute>`)

**Returns:** `public AttributeSupplier.Builder`

### add

```java
public AttributeSupplier.Builder add(Holder<Attribute> p_316875_, double p_22270_)
```

**Parameters:**

- `p_316875_` (`Holder<Attribute>`)
- `p_22270_` (`double`)

**Returns:** `public AttributeSupplier.Builder`

### build

```java
public AttributeSupplier build()
```

**Returns:** `public AttributeSupplier`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
