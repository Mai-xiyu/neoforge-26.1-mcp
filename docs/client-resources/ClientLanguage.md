# ClientLanguage

**Package:** `net.minecraft.client.resources.language`
**Type:** class
**Extends:** `Language`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientLanguage

```java
private ClientLanguage(Map<String, String> p_118914_, boolean p_118915_, Map<String, net.minecraft.network.chat.Component> componentStorage)
```

**Parameters:**

- `p_118914_` (`Map<String, String>`)
- `p_118915_` (`boolean`)
- `componentStorage` (`Map<String, net.minecraft.network.chat.Component>`)

**Returns:** `private`

### loadFrom

```java
public static ClientLanguage loadFrom(ResourceManager p_265765_, List<String> p_265743_, boolean p_265470_)
```

**Parameters:**

- `p_265765_` (`ResourceManager`)
- `p_265743_` (`List<String>`)
- `p_265470_` (`boolean`)

**Returns:** `public static ClientLanguage`

### appendFrom

```java
private static void appendFrom(String p_235036_, List<Resource> p_235037_, Map<String, String> p_235038_, Map<String, net.minecraft.network.chat.Component> componentMap)
```

**Parameters:**

- `p_235036_` (`String`)
- `p_235037_` (`List<Resource>`)
- `p_235038_` (`Map<String, String>`)
- `componentMap` (`Map<String, net.minecraft.network.chat.Component>`)

**Returns:** `private static void`

### getOrDefault

```java
public String getOrDefault(String p_118920_, String p_265273_)
```

**Parameters:**

- `p_118920_` (`String`)
- `p_265273_` (`String`)

**Returns:** `String`

### has

```java
public boolean has(String p_118928_)
```

**Parameters:**

- `p_118928_` (`String`)

**Returns:** `boolean`

### isDefaultRightToLeft

```java
public boolean isDefaultRightToLeft()
```

**Returns:** `boolean`

### getVisualOrder

```java
public FormattedCharSequence getVisualOrder(FormattedText p_118925_)
```

**Parameters:**

- `p_118925_` (`FormattedText`)

**Returns:** `FormattedCharSequence`

### getLanguageData

```java
public Map<String, String> getLanguageData()
```

**Returns:** `Map<String, String>`

### getComponent

```java
.jetbrains.annotations.Nullable net.minecraft.network.chat.Component getComponent(String key)
```

**Parameters:**

- `key` (`String`)

**Returns:** `.jetbrains.annotations.Nullable net.minecraft.network.chat.Component`
