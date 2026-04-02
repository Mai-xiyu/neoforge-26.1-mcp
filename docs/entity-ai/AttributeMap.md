# AttributeMap

**Package:** `net.minecraft.world.entity.ai.attributes`
**Type:** class

## Methods

### AttributeMap

```java
public AttributeMap(AttributeSupplier p_22144_)
```

**Parameters:**

- `p_22144_` (`AttributeSupplier`)

**Returns:** `public`

### onAttributeModified

```java
private void onAttributeModified(AttributeInstance p_22158_)
```

**Parameters:**

- `p_22158_` (`AttributeInstance`)

**Returns:** `private void`

### getAttributesToSync

```java
public Set<AttributeInstance> getAttributesToSync()
```

**Returns:** `public Set<AttributeInstance>`

### getAttributesToUpdate

```java
public Set<AttributeInstance> getAttributesToUpdate()
```

**Returns:** `public Set<AttributeInstance>`

### getSyncableAttributes

```java
public Collection<AttributeInstance> getSyncableAttributes()
```

**Returns:** `public Collection<AttributeInstance>`

### getInstance

```java
public AttributeInstance getInstance(Holder<Attribute> p_250010_)
```

**Parameters:**

- `p_250010_` (`Holder<Attribute>`)

**Returns:** `AttributeInstance`

### hasAttribute

```java
public boolean hasAttribute(Holder<Attribute> p_248893_)
```

**Parameters:**

- `p_248893_` (`Holder<Attribute>`)

**Returns:** `public boolean`

### hasModifier

```java
public boolean hasModifier(Holder<Attribute> p_250299_, ResourceLocation p_350963_)
```

**Parameters:**

- `p_250299_` (`Holder<Attribute>`)
- `p_350963_` (`ResourceLocation`)

**Returns:** `public boolean`

### getValue

```java
public double getValue(Holder<Attribute> p_316690_)
```

**Parameters:**

- `p_316690_` (`Holder<Attribute>`)

**Returns:** `public double`

### getBaseValue

```java
public double getBaseValue(Holder<Attribute> p_316270_)
```

**Parameters:**

- `p_316270_` (`Holder<Attribute>`)

**Returns:** `public double`

### getModifierValue

```java
public double getModifierValue(Holder<Attribute> p_251534_, ResourceLocation p_350464_)
```

**Parameters:**

- `p_251534_` (`Holder<Attribute>`)
- `p_350464_` (`ResourceLocation`)

**Returns:** `public double`

### addTransientAttributeModifiers

```java
public void addTransientAttributeModifiers(Multimap<Holder<Attribute>, AttributeModifier> p_345244_)
```

**Parameters:**

- `p_345244_` (`Multimap<Holder<Attribute>, AttributeModifier>`)

**Returns:** `public void`

### removeAttributeModifiers

```java
public void removeAttributeModifiers(Multimap<Holder<Attribute>, AttributeModifier> p_344776_)
```

**Parameters:**

- `p_344776_` (`Multimap<Holder<Attribute>, AttributeModifier>`)

**Returns:** `public void`

### assignAllValues

```java
public void assignAllValues(AttributeMap p_348501_)
```

**Parameters:**

- `p_348501_` (`AttributeMap`)

**Returns:** `public void`

### assignBaseValues

```java
public void assignBaseValues(AttributeMap p_22160_)
```

**Parameters:**

- `p_22160_` (`AttributeMap`)

**Returns:** `public void`

### save

```java
public ListTag save()
```

**Returns:** `public ListTag`

### load

```java
public void load(ListTag p_22169_)
```

**Parameters:**

- `p_22169_` (`ListTag`)

**Returns:** `public void`
