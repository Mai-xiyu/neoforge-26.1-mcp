# MenuScreens

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### create

```java
<T extends AbstractContainerMenu> public static <T extends AbstractContainerMenu> void create(MenuType<T> p_96202_, Minecraft p_96203_, int p_96204_, Component p_96205_)
```

**Parameters:**

- `p_96202_` (`MenuType<T>`)
- `p_96203_` (`Minecraft`)
- `p_96204_` (`int`)
- `p_96205_` (`Component`)

**Returns:** `public static <T extends AbstractContainerMenu> void`

### getScreenFactory

```java
<T extends AbstractContainerMenu> public static <T extends AbstractContainerMenu> java.util.Optional<ScreenConstructor<T, ?>> getScreenFactory(MenuType<T> p_96202_)
```

**Parameters:**

- `p_96202_` (`MenuType<T>`)

**Returns:** `public static <T extends AbstractContainerMenu> java.util.Optional<ScreenConstructor<T, ?>>`

### register

```java
MenuAccess<M>> void register(MenuType<? extends M> p_96207_, MenuScreens.ScreenConstructor<M, U> p_96208_)
```

**Parameters:**

- `p_96207_` (`MenuType<? extends M>`)
- `p_96208_` (`MenuScreens.ScreenConstructor<M, U>`)

**Returns:** `MenuAccess<M>> void`

### init

```java
.jetbrains.annotations.ApiStatus.Internal
    public static void init()
```

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public static void`

### selfTest

```java
public static boolean selfTest()
```

**Returns:** `public static boolean`

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``

### fromPacket

```java
default void fromPacket(Component p_96210_, MenuType<T> p_96211_, Minecraft p_96212_, int p_96213_)
```

**Parameters:**

- `p_96210_` (`Component`)
- `p_96211_` (`MenuType<T>`)
- `p_96212_` (`Minecraft`)
- `p_96213_` (`int`)

**Returns:** `default void`

### create

```java
U create(T p_96215_, Inventory p_96216_, Component p_96217_)
```

**Parameters:**

- `p_96215_` (`T`)
- `p_96216_` (`Inventory`)
- `p_96217_` (`Component`)

**Returns:** `U`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ScreenConstructor` | interface |  |
