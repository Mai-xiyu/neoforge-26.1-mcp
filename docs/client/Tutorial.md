# Tutorial

**Package:** `net.minecraft.client.tutorial`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Tutorial

```java
public Tutorial(Minecraft p_175022_, Options p_175023_)
```

**Parameters:**

- `p_175022_` (`Minecraft`)
- `p_175023_` (`Options`)

**Returns:** `public`

### onInput

```java
public void onInput(Input p_120587_)
```

**Parameters:**

- `p_120587_` (`Input`)

**Returns:** `public void`

### onMouse

```java
public void onMouse(double p_120566_, double p_120567_)
```

**Parameters:**

- `p_120566_` (`double`)
- `p_120567_` (`double`)

**Returns:** `public void`

### onLookAt

```java
public void onLookAt(ClientLevel p_120579_, HitResult p_120580_)
```

**Parameters:**

- `p_120579_` (`ClientLevel`)
- `p_120580_` (`HitResult`)

**Returns:** `public void`

### onDestroyBlock

```java
public void onDestroyBlock(ClientLevel p_120582_, BlockPos p_120583_, BlockState p_120584_, float p_120585_)
```

**Parameters:**

- `p_120582_` (`ClientLevel`)
- `p_120583_` (`BlockPos`)
- `p_120584_` (`BlockState`)
- `p_120585_` (`float`)

**Returns:** `public void`

### onOpenInventory

```java
public void onOpenInventory()
```

**Returns:** `public void`

### onGetItem

```java
public void onGetItem(ItemStack p_120569_)
```

**Parameters:**

- `p_120569_` (`ItemStack`)

**Returns:** `public void`

### stop

```java
public void stop()
```

**Returns:** `public void`

### start

```java
public void start()
```

**Returns:** `public void`

### addTimedToast

```java
public void addTimedToast(TutorialToast p_120573_, int p_120574_)
```

**Parameters:**

- `p_120573_` (`TutorialToast`)
- `p_120574_` (`int`)

**Returns:** `public void`

### removeTimedToast

```java
public void removeTimedToast(TutorialToast p_120571_)
```

**Parameters:**

- `p_120571_` (`TutorialToast`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### setStep

```java
public void setStep(TutorialSteps p_120589_)
```

**Parameters:**

- `p_120589_` (`TutorialSteps`)

**Returns:** `public void`

### getMinecraft

```java
public Minecraft getMinecraft()
```

**Returns:** `public Minecraft`

### isSurvival

```java
public boolean isSurvival()
```

**Returns:** `public boolean`

### key

```java
public static Component key(String p_120593_)
```

**Parameters:**

- `p_120593_` (`String`)

**Returns:** `public static Component`

### onInventoryAction

```java
public void onInventoryAction(ItemStack p_175025_, ItemStack p_175026_, ClickAction p_175027_)
```

**Parameters:**

- `p_175025_` (`ItemStack`)
- `p_175026_` (`ItemStack`)
- `p_175027_` (`ClickAction`)

**Returns:** `public void`

### TimedToast

```java
 TimedToast(TutorialToast p_120603_, int p_120604_)
```

**Parameters:**

- `p_120603_` (`TutorialToast`)
- `p_120604_` (`int`)

**Returns:** ``

### updateProgress

```java
private boolean updateProgress()
```

**Returns:** `private boolean`
