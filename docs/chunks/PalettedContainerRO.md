# PalettedContainerRO

**Package:** `net.minecraft.world.level.chunk`
**Type:** interface<T>

## Methods

### get

```java
T get(int p_238291_, int p_238292_, int p_238293_)
```

**Parameters:**

- `p_238291_` (`int`)
- `p_238292_` (`int`)
- `p_238293_` (`int`)

**Returns:** `T`

### getAll

```java
void getAll(Consumer<T> p_238353_)
```

**Parameters:**

- `p_238353_` (`Consumer<T>`)

### write

```java
void write(FriendlyByteBuf p_238417_)
```

**Parameters:**

- `p_238417_` (`FriendlyByteBuf`)

### getSerializedSize

```java
int getSerializedSize()
```

**Returns:** `int`

### maybeHas

```java
boolean maybeHas(Predicate<T> p_238437_)
```

**Parameters:**

- `p_238437_` (`Predicate<T>`)

**Returns:** `boolean`

### count

```java
void count(PalettedContainer.CountConsumer<T> p_238355_)
```

**Parameters:**

- `p_238355_` (`PalettedContainer.CountConsumer<T>`)

### recreate

```java
PalettedContainer<T> recreate()
```

**Returns:** `PalettedContainer<T>`

### pack

```java
PalettedContainerRO.PackedData<T> pack(IdMap<T> p_238441_, PalettedContainer.Strategy p_238442_)
```

**Parameters:**

- `p_238441_` (`IdMap<T>`)
- `p_238442_` (`PalettedContainer.Strategy`)

**Returns:** `PalettedContainerRO.PackedData<T>`

### read

```java
DataResult<C> read(IdMap<T> p_238364_, PalettedContainer.Strategy p_238365_, PalettedContainerRO.PackedData<T> p_238366_)
```

**Parameters:**

- `p_238364_` (`IdMap<T>`)
- `p_238365_` (`PalettedContainer.Strategy`)
- `p_238366_` (`PalettedContainerRO.PackedData<T>`)

**Returns:** `DataResult<C>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PackedData` | record |  |
| `Unpacker` | interface |  |
