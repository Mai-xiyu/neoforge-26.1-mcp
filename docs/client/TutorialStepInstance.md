# TutorialStepInstance

**Package:** `net.minecraft.client.tutorial`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### clear

```java
default void clear()
```

**Returns:** `default void`

### tick

```java
default void tick()
```

**Returns:** `default void`

### onInput

```java
default void onInput(Input p_120623_)
```

**Parameters:**

- `p_120623_` (`Input`)

**Returns:** `default void`

### onMouse

```java
default void onMouse(double p_120614_, double p_120615_)
```

**Parameters:**

- `p_120614_` (`double`)
- `p_120615_` (`double`)

**Returns:** `default void`

### onLookAt

```java
default void onLookAt(ClientLevel p_120617_, HitResult p_120618_)
```

**Parameters:**

- `p_120617_` (`ClientLevel`)
- `p_120618_` (`HitResult`)

**Returns:** `default void`

### onDestroyBlock

```java
default void onDestroyBlock(ClientLevel p_120619_, BlockPos p_120620_, BlockState p_120621_, float p_120622_)
```

**Parameters:**

- `p_120619_` (`ClientLevel`)
- `p_120620_` (`BlockPos`)
- `p_120621_` (`BlockState`)
- `p_120622_` (`float`)

**Returns:** `default void`

### onOpenInventory

```java
default void onOpenInventory()
```

**Returns:** `default void`

### onGetItem

```java
default void onGetItem(ItemStack p_120616_)
```

**Parameters:**

- `p_120616_` (`ItemStack`)

**Returns:** `default void`
