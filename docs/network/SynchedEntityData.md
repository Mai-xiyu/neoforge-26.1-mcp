# SynchedEntityData

**Package:** `net.minecraft.network.syncher`
**Type:** class

## Methods

### SynchedEntityData

```java
 SynchedEntityData(SyncedDataHolder p_326156_, SynchedEntityData.DataItem<?>[] p_326032_)
```

**Parameters:**

- `p_326156_` (`SyncedDataHolder`)
- `p_326032_` (`SynchedEntityData.DataItem<?>[]`)

**Returns:** ``

### defineId

```java
<T> public static <T> EntityDataAccessor<T> defineId(Class<? extends SyncedDataHolder> p_135354_, EntityDataSerializer<T> p_135355_)
```

**Parameters:**

- `p_135354_` (`Class<? extends SyncedDataHolder>`)
- `p_135355_` (`EntityDataSerializer<T>`)

**Returns:** `public static <T> EntityDataAccessor<T>`

### getItem

```java
<T> private <T> SynchedEntityData.DataItem<T> getItem(EntityDataAccessor<T> p_135380_)
```

**Parameters:**

- `p_135380_` (`EntityDataAccessor<T>`)

**Returns:** `private <T> SynchedEntityData.DataItem<T>`

### get

```java
<T> public <T> T get(EntityDataAccessor<T> p_135371_)
```

**Parameters:**

- `p_135371_` (`EntityDataAccessor<T>`)

**Returns:** `public <T> T`

### set

```java
<T> public <T> void set(EntityDataAccessor<T> p_135382_, T p_135383_)
```

**Parameters:**

- `p_135382_` (`EntityDataAccessor<T>`)
- `p_135383_` (`T`)

**Returns:** `public <T> void`

### set

```java
<T> public <T> void set(EntityDataAccessor<T> p_276368_, T p_276363_, boolean p_276370_)
```

**Parameters:**

- `p_276368_` (`EntityDataAccessor<T>`)
- `p_276363_` (`T`)
- `p_276370_` (`boolean`)

**Returns:** `public <T> void`

### isDirty

```java
public boolean isDirty()
```

**Returns:** `public boolean`

### packDirty

```java
public List<SynchedEntityData.DataValue<?>> packDirty()
```

**Returns:** `List<SynchedEntityData.DataValue<?>>`

### getNonDefaultValues

```java
public List<SynchedEntityData.DataValue<?>> getNonDefaultValues()
```

**Returns:** `List<SynchedEntityData.DataValue<?>>`

### assignValues

```java
public void assignValues(List<SynchedEntityData.DataValue<?>> p_135357_)
```

**Parameters:**

- `p_135357_` (`List<SynchedEntityData.DataValue<?>>`)

**Returns:** `public void`

### assignValue

```java
<T> private <T> void assignValue(SynchedEntityData.DataItem<T> p_135376_, SynchedEntityData.DataValue<?> p_254484_)
```

**Parameters:**

- `p_135376_` (`SynchedEntityData.DataItem<T>`)
- `p_254484_` (`SynchedEntityData.DataValue<?>`)

**Returns:** `private <T> void`

### Builder

```java
public Builder(SyncedDataHolder p_326500_)
```

**Parameters:**

- `p_326500_` (`SyncedDataHolder`)

**Returns:** `public`

### define

```java
<T> public <T> SynchedEntityData.Builder define(EntityDataAccessor<T> p_326262_, T p_326000_)
```

**Parameters:**

- `p_326262_` (`EntityDataAccessor<T>`)
- `p_326000_` (`T`)

**Returns:** `public <T> SynchedEntityData.Builder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Duplicate id value for " + i + "!")
```

**Parameters:**

- `"!"` (`"Duplicate id value for " + i +`)

**Returns:** `throw new`

### build

```java
public SynchedEntityData build()
```

**Returns:** `public SynchedEntityData`

### SynchedEntityData

```java
return new SynchedEntityData()
```

**Returns:** `return new`

### DataItem

```java
public DataItem(EntityDataAccessor<T> p_135394_, T p_135395_)
```

**Parameters:**

- `p_135394_` (`EntityDataAccessor<T>`)
- `p_135395_` (`T`)

**Returns:** `public`

### getAccessor

```java
public EntityDataAccessor<T> getAccessor()
```

**Returns:** `public EntityDataAccessor<T>`

### setValue

```java
public void setValue(T p_135398_)
```

**Parameters:**

- `p_135398_` (`T`)

**Returns:** `public void`

### getValue

```java
public T getValue()
```

**Returns:** `public T`

### isDirty

```java
public boolean isDirty()
```

**Returns:** `public boolean`

### setDirty

```java
public void setDirty(boolean p_135402_)
```

**Parameters:**

- `p_135402_` (`boolean`)

**Returns:** `public void`

### isSetToDefault

```java
public boolean isSetToDefault()
```

**Returns:** `public boolean`

### value

```java
public SynchedEntityData.DataValue<T> value()
```

**Returns:** `public SynchedEntityData.DataValue<T>`

### create

```java
<T> public static <T> SynchedEntityData.DataValue<T> create(EntityDataAccessor<T> p_254543_, T p_254138_)
```

**Parameters:**

- `p_254543_` (`EntityDataAccessor<T>`)
- `p_254138_` (`T`)

**Returns:** `public static <T> SynchedEntityData.DataValue<T>`

### write

```java
public void write(RegistryFriendlyByteBuf p_320650_)
```

**Parameters:**

- `p_320650_` (`RegistryFriendlyByteBuf`)

**Returns:** `public void`

### EncoderException

```java
throw new EncoderException("Unknown serializer type " + this.serializer)
```

**Parameters:**

- `this.serializer` (`"Unknown serializer type " +`)

**Returns:** `throw new`

### read

```java
public static SynchedEntityData.DataValue<?> read(RegistryFriendlyByteBuf p_319816_, int p_254356_)
```

**Parameters:**

- `p_319816_` (`RegistryFriendlyByteBuf`)
- `p_254356_` (`int`)

**Returns:** `public static SynchedEntityData.DataValue<?>`

### DecoderException

```java
throw new DecoderException("Unknown serializer type " + i)
```

**Parameters:**

- `i` (`"Unknown serializer type " +`)

**Returns:** `throw new`

### read

```java
return read()
```

**Returns:** `return`

### read

```java
<T> private static <T> SynchedEntityData.DataValue<T> read(RegistryFriendlyByteBuf p_320893_, int p_253899_, EntityDataSerializer<T> p_254222_)
```

**Parameters:**

- `p_320893_` (`RegistryFriendlyByteBuf`)
- `p_253899_` (`int`)
- `p_254222_` (`EntityDataSerializer<T>`)

**Returns:** `private static <T> SynchedEntityData.DataValue<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `DataItem` | class |  |
| `DataValue` | record |  |
