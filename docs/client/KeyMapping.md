# KeyMapping

**Package:** `net.minecraft.client`
**Type:** class
**Implements:** `Comparable<KeyMapping>`, `net.neoforged.neoforge.client.extensions.IKeyMappingExtension`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CATEGORY_MOVEMENT` | `String` |  |
| `CATEGORY_MISC` | `String` |  |
| `CATEGORY_MULTIPLAYER` | `String` |  |
| `CATEGORY_GAMEPLAY` | `String` |  |
| `CATEGORY_INVENTORY` | `String` |  |
| `CATEGORY_INTERFACE` | `String` |  |
| `CATEGORY_CREATIVE` | `String` |  |

## Methods

### click

```java
public static void click(InputConstants.Key p_90836_)
```

**Parameters:**

- `p_90836_` (`InputConstants.Key`)

**Returns:** `public static void`

### set

```java
public static void set(InputConstants.Key p_90838_, boolean p_90839_)
```

**Parameters:**

- `p_90838_` (`InputConstants.Key`)
- `p_90839_` (`boolean`)

**Returns:** `public static void`

### setAll

```java
public static void setAll()
```

**Returns:** `public static void`

### releaseAll

```java
public static void releaseAll()
```

**Returns:** `public static void`

### resetToggleKeys

```java
public static void resetToggleKeys()
```

**Returns:** `public static void`

### resetMapping

```java
public static void resetMapping()
```

**Returns:** `public static void`

### KeyMapping

```java
public KeyMapping(String p_90821_, int p_90822_, String p_90823_)
```

**Parameters:**

- `p_90821_` (`String`)
- `p_90822_` (`int`)
- `p_90823_` (`String`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### KeyMapping

```java
public KeyMapping(String p_90825_, InputConstants.Type p_90826_, int p_90827_, String p_90828_)
```

**Parameters:**

- `p_90825_` (`String`)
- `p_90826_` (`InputConstants.Type`)
- `p_90827_` (`int`)
- `p_90828_` (`String`)

**Returns:** `public`

### isDown

```java
public boolean isDown()
```

**Returns:** `public boolean`

### getCategory

```java
public String getCategory()
```

**Returns:** `public String`

### consumeClick

```java
public boolean consumeClick()
```

**Returns:** `public boolean`

### release

```java
private void release()
```

**Returns:** `private void`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getDefaultKey

```java
public InputConstants.Key getDefaultKey()
```

**Returns:** `public InputConstants.Key`

### setKey

```java
public void setKey(InputConstants.Key p_90849_)
```

**Parameters:**

- `p_90849_` (`InputConstants.Key`)

**Returns:** `public void`

### compareTo

```java
public int compareTo(KeyMapping p_90841_)
```

**Parameters:**

- `p_90841_` (`KeyMapping`)

**Returns:** `public int`

### createNameSupplier

```java
public static Supplier<Component> createNameSupplier(String p_90843_)
```

**Parameters:**

- `p_90843_` (`String`)

**Returns:** `public static Supplier<Component>`

### same

```java
public boolean same(KeyMapping p_90851_)
```

**Parameters:**

- `p_90851_` (`KeyMapping`)

**Returns:** `public boolean`

### isUnbound

```java
public boolean isUnbound()
```

**Returns:** `public boolean`

### matches

```java
public boolean matches(int p_90833_, int p_90834_)
```

**Parameters:**

- `p_90833_` (`int`)
- `p_90834_` (`int`)

**Returns:** `public boolean`

### matchesMouse

```java
public boolean matchesMouse(int p_90831_)
```

**Parameters:**

- `p_90831_` (`int`)

**Returns:** `public boolean`

### getTranslatedKeyMessage

```java
public Component getTranslatedKeyMessage()
```

**Returns:** `public Component`

### isDefault

```java
public boolean isDefault()
```

**Returns:** `public boolean`

### saveString

```java
public String saveString()
```

**Returns:** `public String`

### setDown

```java
public void setDown(boolean p_90846_)
```

**Parameters:**

- `p_90846_` (`boolean`)

**Returns:** `public void`

### KeyMapping

```java
public public KeyMapping(String description, net.neoforged.neoforge.client.settings.IKeyConflictContext keyConflictContext, InputConstants.Type inputType, int keyCode, String category)
```

**Parameters:**

- `description` (`String`)
- `keyConflictContext` (`net.neoforged.neoforge.client.settings.IKeyConflictContext`)
- `inputType` (`InputConstants.Type`)
- `keyCode` (`int`)
- `category` (`String`)

**Returns:** `public`

### KeyMapping

```java
public public KeyMapping(String description, net.neoforged.neoforge.client.settings.IKeyConflictContext keyConflictContext, InputConstants.Key keyCode, String category)
```

**Parameters:**

- `description` (`String`)
- `keyConflictContext` (`net.neoforged.neoforge.client.settings.IKeyConflictContext`)
- `keyCode` (`InputConstants.Key`)
- `category` (`String`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### KeyMapping

```java
public public KeyMapping(String description, net.neoforged.neoforge.client.settings.IKeyConflictContext keyConflictContext, net.neoforged.neoforge.client.settings.KeyModifier keyModifier, InputConstants.Type inputType, int keyCode, String category)
```

**Parameters:**

- `description` (`String`)
- `keyConflictContext` (`net.neoforged.neoforge.client.settings.IKeyConflictContext`)
- `keyModifier` (`net.neoforged.neoforge.client.settings.KeyModifier`)
- `inputType` (`InputConstants.Type`)
- `keyCode` (`int`)
- `category` (`String`)

**Returns:** `public`

### KeyMapping

```java
public public KeyMapping(String description, net.neoforged.neoforge.client.settings.IKeyConflictContext keyConflictContext, net.neoforged.neoforge.client.settings.KeyModifier keyModifier, InputConstants.Key keyCode, String category)
```

**Parameters:**

- `description` (`String`)
- `keyConflictContext` (`net.neoforged.neoforge.client.settings.IKeyConflictContext`)
- `keyModifier` (`net.neoforged.neoforge.client.settings.KeyModifier`)
- `keyCode` (`InputConstants.Key`)
- `category` (`String`)

**Returns:** `public`

### getKey

```java
public InputConstants.Key getKey()
```

**Returns:** `InputConstants.Key`

### setKeyConflictContext

```java
public void setKeyConflictContext(net.neoforged.neoforge.client.settings.IKeyConflictContext keyConflictContext)
```

**Parameters:**

- `keyConflictContext` (`net.neoforged.neoforge.client.settings.IKeyConflictContext`)

### getKeyConflictContext

```java
public net.neoforged.neoforge.client.settings.IKeyConflictContext getKeyConflictContext()
```

**Returns:** `net.neoforged.neoforge.client.settings.IKeyConflictContext`

### getDefaultKeyModifier

```java
public net.neoforged.neoforge.client.settings.KeyModifier getDefaultKeyModifier()
```

**Returns:** `net.neoforged.neoforge.client.settings.KeyModifier`

### getKeyModifier

```java
public net.neoforged.neoforge.client.settings.KeyModifier getKeyModifier()
```

**Returns:** `net.neoforged.neoforge.client.settings.KeyModifier`

### setKeyModifierAndCode

```java
public void setKeyModifierAndCode(net.neoforged.neoforge.client.settings.KeyModifier keyModifier, InputConstants.Key keyCode)
```

**Parameters:**

- `keyModifier` (`net.neoforged.neoforge.client.settings.KeyModifier`)
- `keyCode` (`InputConstants.Key`)
