# RealmsSubscriptionInfoScreen

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsSubscriptionInfoScreen

```java
public RealmsSubscriptionInfoScreen(Screen p_89979_, RealmsServer p_89980_, Screen p_89981_)
```

**Parameters:**

- `p_89979_` (`Screen`)
- `p_89980_` (`RealmsServer`)
- `p_89981_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init()
```

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### deleteRealm

```java
private void deleteRealm()
```

**Returns:** `private void`

### run

```java
public void run()
```

### getSubscription

```java
private void getSubscription(long p_89990_)
```

**Parameters:**

- `p_89990_` (`long`)

**Returns:** `private void`

### localPresentation

```java
private static Component localPresentation(long p_182539_)
```

**Parameters:**

- `p_182539_` (`long`)

**Returns:** `private static Component`

### onClose

```java
public void onClose()
```

### render

```java
public void render(GuiGraphics p_282831_, int p_281266_, int p_281799_, float p_282330_)
```

**Parameters:**

- `p_282831_` (`GuiGraphics`)
- `p_281266_` (`int`)
- `p_281799_` (`int`)
- `p_282330_` (`float`)

### daysLeftPresentation

```java
private Component daysLeftPresentation(int p_89984_)
```

**Parameters:**

- `p_89984_` (`int`)

**Returns:** `private Component`
