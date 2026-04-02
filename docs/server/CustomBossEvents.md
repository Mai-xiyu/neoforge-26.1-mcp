# CustomBossEvents

**Package:** `net.minecraft.server.bossevents`
**Type:** class
**Side:** 🖧 Server

## Methods

### get

```java
public CustomBossEvent get(ResourceLocation p_136298_)
```

**Parameters:**

- `p_136298_` (`ResourceLocation`)

**Returns:** `CustomBossEvent`

### create

```java
public CustomBossEvent create(ResourceLocation p_136300_, Component p_136301_)
```

**Parameters:**

- `p_136300_` (`ResourceLocation`)
- `p_136301_` (`Component`)

**Returns:** `public CustomBossEvent`

### remove

```java
public void remove(CustomBossEvent p_136303_)
```

**Parameters:**

- `p_136303_` (`CustomBossEvent`)

**Returns:** `public void`

### getIds

```java
public Collection<ResourceLocation> getIds()
```

**Returns:** `public Collection<ResourceLocation>`

### getEvents

```java
public Collection<CustomBossEvent> getEvents()
```

**Returns:** `public Collection<CustomBossEvent>`

### save

```java
public CompoundTag save(HolderLookup.Provider p_330783_)
```

**Parameters:**

- `p_330783_` (`HolderLookup.Provider`)

**Returns:** `public CompoundTag`

### load

```java
public void load(CompoundTag p_136296_, HolderLookup.Provider p_331580_)
```

**Parameters:**

- `p_136296_` (`CompoundTag`)
- `p_331580_` (`HolderLookup.Provider`)

**Returns:** `public void`

### onPlayerConnect

```java
public void onPlayerConnect(ServerPlayer p_136294_)
```

**Parameters:**

- `p_136294_` (`ServerPlayer`)

**Returns:** `public void`

### onPlayerDisconnect

```java
public void onPlayerDisconnect(ServerPlayer p_136306_)
```

**Parameters:**

- `p_136306_` (`ServerPlayer`)

**Returns:** `public void`
