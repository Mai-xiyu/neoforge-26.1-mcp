# EquipmentSlotGroup

**Package:** `net.minecraft.world.entity`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BY_ID` | `IntFunction<EquipmentSlotGroup>` |  |
| `CODEC` | `Codec<EquipmentSlotGroup>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, EquipmentSlotGroup>` |  |

## Methods

### BODY

```java
, BODY()
```

**Returns:** `,`

### EquipmentSlotGroup

```java
private EquipmentSlotGroup(int p_331154_, String p_330415_, Predicate<EquipmentSlot> p_330269_)
```

**Parameters:**

- `p_331154_` (`int`)
- `p_330415_` (`String`)
- `p_330269_` (`Predicate<EquipmentSlot>`)

**Returns:** `private`

### EquipmentSlotGroup

```java
private EquipmentSlotGroup(int p_331473_, String p_330947_, EquipmentSlot p_331230_)
```

**Parameters:**

- `p_331473_` (`int`)
- `p_330947_` (`String`)
- `p_331230_` (`EquipmentSlot`)

**Returns:** `private`

### this

```java
 this(p_330549_ -> p_330549_ == p_331230_)
```

**Parameters:**

- `p_331230_` (`p_330549_ -> p_330549_ ==`)

**Returns:** ``

### bySlot

```java
public static EquipmentSlotGroup bySlot(EquipmentSlot p_339603_)
```

**Parameters:**

- `p_339603_` (`EquipmentSlot`)

**Returns:** `public static EquipmentSlotGroup`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### test

```java
public boolean test(EquipmentSlot p_330499_)
```

**Parameters:**

- `p_330499_` (`EquipmentSlot`)

**Returns:** `public boolean`
