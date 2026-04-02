# AttributeInstance

**Package:** `net.minecraft.world.entity.ai.attributes`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ID_FIELD` | `String` |  |

## Methods

### AttributeInstance

```java
public AttributeInstance(Holder<Attribute> p_316357_, Consumer<AttributeInstance> p_22098_)
```

**Parameters:**

- `p_316357_` (`Holder<Attribute>`)
- `p_22098_` (`Consumer<AttributeInstance>`)

**Returns:** `public`

### getAttribute

```java
public Holder<Attribute> getAttribute()
```

**Returns:** `public Holder<Attribute>`

### getBaseValue

```java
public double getBaseValue()
```

**Returns:** `public double`

### setBaseValue

```java
public void setBaseValue(double p_22101_)
```

**Parameters:**

- `p_22101_` (`double`)

**Returns:** `public void`

### getModifiers

```java
Map<ResourceLocation, AttributeModifier> getModifiers(AttributeModifier.Operation p_22105_)
```

**Parameters:**

- `p_22105_` (`AttributeModifier.Operation`)

**Returns:** `Map<ResourceLocation, AttributeModifier>`

### getModifiers

```java
public Set<AttributeModifier> getModifiers()
```

**Returns:** `public Set<AttributeModifier>`

### getModifier

```java
public AttributeModifier getModifier(ResourceLocation p_351007_)
```

**Parameters:**

- `p_351007_` (`ResourceLocation`)

**Returns:** `AttributeModifier`

### hasModifier

```java
public boolean hasModifier(ResourceLocation p_350421_)
```

**Parameters:**

- `p_350421_` (`ResourceLocation`)

**Returns:** `public boolean`

### addModifier

```java
private void addModifier(AttributeModifier p_22134_)
```

**Parameters:**

- `p_22134_` (`AttributeModifier`)

**Returns:** `private void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Modifier is already applied on this attribute!")
```

**Parameters:**

- `attribute!"` (`"Modifier is already applied on this`)

**Returns:** `throw new`

### addOrUpdateTransientModifier

```java
public void addOrUpdateTransientModifier(AttributeModifier p_316482_)
```

**Parameters:**

- `p_316482_` (`AttributeModifier`)

**Returns:** `public void`

### addTransientModifier

```java
public void addTransientModifier(AttributeModifier p_22119_)
```

**Parameters:**

- `p_22119_` (`AttributeModifier`)

**Returns:** `public void`

### addOrReplacePermanentModifier

```java
public void addOrReplacePermanentModifier(AttributeModifier p_353041_)
```

**Parameters:**

- `p_353041_` (`AttributeModifier`)

**Returns:** `public void`

### addPermanentModifier

```java
public void addPermanentModifier(AttributeModifier p_22126_)
```

**Parameters:**

- `p_22126_` (`AttributeModifier`)

**Returns:** `public void`

### setDirty

```java
protected void setDirty()
```

**Returns:** `protected void`

### removeModifier

```java
public void removeModifier(AttributeModifier p_22131_)
```

**Parameters:**

- `p_22131_` (`AttributeModifier`)

**Returns:** `public void`

### removeModifier

```java
public boolean removeModifier(ResourceLocation p_350300_)
```

**Parameters:**

- `p_350300_` (`ResourceLocation`)

**Returns:** `public boolean`

### removeModifiers

```java
public void removeModifiers()
```

**Returns:** `public void`

### getValue

```java
public double getValue()
```

**Returns:** `public double`

### calculateValue

```java
private double calculateValue()
```

**Returns:** `private double`

### getModifiersOrEmpty

```java
private Collection<AttributeModifier> getModifiersOrEmpty(AttributeModifier.Operation p_22117_)
```

**Parameters:**

- `p_22117_` (`AttributeModifier.Operation`)

**Returns:** `private Collection<AttributeModifier>`

### replaceFrom

```java
public void replaceFrom(AttributeInstance p_22103_)
```

**Parameters:**

- `p_22103_` (`AttributeInstance`)

**Returns:** `public void`

### save

```java
public CompoundTag save()
```

**Returns:** `public CompoundTag`

### load

```java
public void load(CompoundTag p_22114_)
```

**Parameters:**

- `p_22114_` (`CompoundTag`)

**Returns:** `public void`
