# IMinecraftExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `Minecraft`.

## Methods

### self

```java
private Minecraft self()
```

**Returns:** `private Minecraft`

### pushGuiLayer

```java
default void pushGuiLayer(Screen screen)
```

**Parameters:**

- `screen` (`Screen`)

### popGuiLayer

```java
default void popGuiLayer()
```

### getLocale

```java
default Locale getLocale()
```

**Returns:** `Locale`
