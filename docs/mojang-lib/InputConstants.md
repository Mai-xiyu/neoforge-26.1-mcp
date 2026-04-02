# InputConstants

**Package:** `com.mojang.blaze3d.platform`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `KEY_0` | `int` |  |
| `KEY_1` | `int` |  |
| `KEY_2` | `int` |  |
| `KEY_3` | `int` |  |
| `KEY_4` | `int` |  |
| `KEY_5` | `int` |  |
| `KEY_6` | `int` |  |
| `KEY_7` | `int` |  |
| `KEY_8` | `int` |  |
| `KEY_9` | `int` |  |
| `KEY_A` | `int` |  |
| `KEY_B` | `int` |  |
| `KEY_C` | `int` |  |
| `KEY_D` | `int` |  |
| `KEY_E` | `int` |  |
| `KEY_F` | `int` |  |
| `KEY_G` | `int` |  |
| `KEY_H` | `int` |  |
| `KEY_I` | `int` |  |
| `KEY_J` | `int` |  |
| `KEY_K` | `int` |  |
| `KEY_L` | `int` |  |
| `KEY_M` | `int` |  |
| `KEY_N` | `int` |  |
| `KEY_O` | `int` |  |
| `KEY_P` | `int` |  |
| `KEY_Q` | `int` |  |
| `KEY_R` | `int` |  |
| `KEY_S` | `int` |  |
| `KEY_T` | `int` |  |
| `KEY_U` | `int` |  |
| `KEY_V` | `int` |  |
| `KEY_W` | `int` |  |
| `KEY_X` | `int` |  |
| `KEY_Y` | `int` |  |
| `KEY_Z` | `int` |  |
| `KEY_F1` | `int` |  |
| `KEY_F2` | `int` |  |
| `KEY_F3` | `int` |  |
| `KEY_F4` | `int` |  |
| `KEY_F5` | `int` |  |
| `KEY_F6` | `int` |  |
| `KEY_F7` | `int` |  |
| `KEY_F8` | `int` |  |
| `KEY_F9` | `int` |  |
| `KEY_F10` | `int` |  |
| `KEY_F11` | `int` |  |
| `KEY_F12` | `int` |  |
| `KEY_F13` | `int` |  |
| `KEY_F14` | `int` |  |
| `KEY_F15` | `int` |  |
| `KEY_F16` | `int` |  |
| `KEY_F17` | `int` |  |
| `KEY_F18` | `int` |  |
| `KEY_F19` | `int` |  |
| `KEY_F20` | `int` |  |
| `KEY_F21` | `int` |  |
| `KEY_F22` | `int` |  |
| `KEY_F23` | `int` |  |
| `KEY_F24` | `int` |  |
| `KEY_F25` | `int` |  |
| `KEY_NUMLOCK` | `int` |  |
| `KEY_NUMPAD0` | `int` |  |
| `KEY_NUMPAD1` | `int` |  |
| `KEY_NUMPAD2` | `int` |  |
| `KEY_NUMPAD3` | `int` |  |
| `KEY_NUMPAD4` | `int` |  |
| `KEY_NUMPAD5` | `int` |  |
| `KEY_NUMPAD6` | `int` |  |
| `KEY_NUMPAD7` | `int` |  |
| `KEY_NUMPAD8` | `int` |  |
| `KEY_NUMPAD9` | `int` |  |
| `KEY_NUMPADCOMMA` | `int` |  |
| `KEY_NUMPADENTER` | `int` |  |
| `KEY_NUMPADEQUALS` | `int` |  |
| `KEY_DOWN` | `int` |  |
| `KEY_LEFT` | `int` |  |
| `KEY_RIGHT` | `int` |  |
| `KEY_UP` | `int` |  |
| `KEY_ADD` | `int` |  |
| `KEY_APOSTROPHE` | `int` |  |
| `KEY_BACKSLASH` | `int` |  |
| `KEY_COMMA` | `int` |  |
| `KEY_EQUALS` | `int` |  |
| `KEY_GRAVE` | `int` |  |
| `KEY_LBRACKET` | `int` |  |
| `KEY_MINUS` | `int` |  |
| `KEY_MULTIPLY` | `int` |  |
| `KEY_PERIOD` | `int` |  |
| `KEY_RBRACKET` | `int` |  |
| `KEY_SEMICOLON` | `int` |  |
| `KEY_SLASH` | `int` |  |
| `KEY_SPACE` | `int` |  |
| `KEY_TAB` | `int` |  |
| `KEY_LALT` | `int` |  |
| `KEY_LCONTROL` | `int` |  |
| `KEY_LSHIFT` | `int` |  |
| `KEY_LWIN` | `int` |  |
| `KEY_RALT` | `int` |  |
| `KEY_RCONTROL` | `int` |  |
| `KEY_RSHIFT` | `int` |  |
| `KEY_RWIN` | `int` |  |
| `KEY_RETURN` | `int` |  |
| `KEY_ESCAPE` | `int` |  |
| `KEY_BACKSPACE` | `int` |  |
| `KEY_DELETE` | `int` |  |
| `KEY_END` | `int` |  |
| `KEY_HOME` | `int` |  |
| `KEY_INSERT` | `int` |  |
| `KEY_PAGEDOWN` | `int` |  |
| `KEY_PAGEUP` | `int` |  |
| `KEY_CAPSLOCK` | `int` |  |

## Methods

### getKey

```java
public static InputConstants.Key getKey(int p_84828_, int p_84829_)
```

**Parameters:**

- `p_84828_` (`int`)
- `p_84829_` (`int`)

**Returns:** `public static InputConstants.Key`

### getKey

```java
public static InputConstants.Key getKey(String p_84852_)
```

**Parameters:**

- `p_84852_` (`String`)

**Returns:** `public static InputConstants.Key`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unknown key name: " + p_84852_)
```

**Parameters:**

- `p_84852_` (`"Unknown key name: " +`)

**Returns:** `throw new`

### isKeyDown

```java
public static boolean isKeyDown(long p_84831_, int p_84832_)
```

**Parameters:**

- `p_84831_` (`long`)
- `p_84832_` (`int`)

**Returns:** `public static boolean`

### setupKeyboardCallbacks

```java
public static void setupKeyboardCallbacks(long p_84845_, GLFWKeyCallbackI p_84846_, GLFWCharModsCallbackI p_84847_)
```

**Parameters:**

- `p_84845_` (`long`)
- `p_84846_` (`GLFWKeyCallbackI`)
- `p_84847_` (`GLFWCharModsCallbackI`)

**Returns:** `public static void`

### setupMouseCallbacks

```java
public static void setupMouseCallbacks(long p_84839_, GLFWCursorPosCallbackI p_84840_, GLFWMouseButtonCallbackI p_84841_, GLFWScrollCallbackI p_84842_, GLFWDropCallbackI p_84843_)
```

**Parameters:**

- `p_84839_` (`long`)
- `p_84840_` (`GLFWCursorPosCallbackI`)
- `p_84841_` (`GLFWMouseButtonCallbackI`)
- `p_84842_` (`GLFWScrollCallbackI`)
- `p_84843_` (`GLFWDropCallbackI`)

**Returns:** `public static void`

### grabOrReleaseMouse

```java
public static void grabOrReleaseMouse(long p_84834_, int p_84835_, double p_84836_, double p_84837_)
```

**Parameters:**

- `p_84834_` (`long`)
- `p_84835_` (`int`)
- `p_84836_` (`double`)
- `p_84837_` (`double`)

**Returns:** `public static void`

### isRawMouseInputSupported

```java
public static boolean isRawMouseInputSupported()
```

**Returns:** `public static boolean`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### updateRawMouseInput

```java
public static void updateRawMouseInput(long p_84849_, boolean p_84850_)
```

**Parameters:**

- `p_84849_` (`long`)
- `p_84850_` (`boolean`)

**Returns:** `public static void`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### Key

```java
 Key(String p_84860_, InputConstants.Type p_84861_, int p_84862_)
```

**Parameters:**

- `p_84860_` (`String`)
- `p_84861_` (`InputConstants.Type`)
- `p_84862_` (`int`)

**Returns:** ``

### getType

```java
public InputConstants.Type getType()
```

**Returns:** `public InputConstants.Type`

### getValue

```java
public int getValue()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getNumericKeyValue

```java
public OptionalInt getNumericKeyValue()
```

**Returns:** `public OptionalInt`

### equals

```java
public boolean equals(Object p_84878_)
```

**Parameters:**

- `p_84878_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### addKey

```java
private static void addKey(InputConstants.Type p_84900_, String p_84901_, int p_84902_)
```

**Parameters:**

- `p_84900_` (`InputConstants.Type`)
- `p_84901_` (`String`)
- `p_84902_` (`int`)

**Returns:** `private static void`

### Type

```java
private Type(String p_84893_, BiFunction<Integer, String, Component> p_84894_)
```

**Parameters:**

- `p_84893_` (`String`)
- `p_84894_` (`BiFunction<Integer, String, Component>`)

**Returns:** `private`

### getOrCreate

```java
public InputConstants.Key getOrCreate(int p_84896_)
```

**Parameters:**

- `p_84896_` (`int`)

**Returns:** `public InputConstants.Key`

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

### addKey

```java
 addKey()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Key` | class |  |
| `Type` | enum |  |
