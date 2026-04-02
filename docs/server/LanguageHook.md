# LanguageHook

**Package:** `net.neoforged.neoforge.server`
**Type:** class
**Side:** 🖧 Server
**Annotations:** `@ApiStatus`

## Description

Loads the built-in language files, and handles loading the default language ({@value Language#DEFAULT}) on the
dedicated server.

## Methods

### captureLanguageMap

```java
public static void captureLanguageMap(Map<String, String> table, Map<String, Component> componentTable)
```

**Parameters:**

- `table` (`Map<String, String>`)
- `componentTable` (`Map<String, Component>`)

**Returns:** `public static void`

### loadLanguage

```java
private static void loadLanguage(String langName, MinecraftServer server)
```

**Parameters:**

- `langName` (`String`)
- `server` (`MinecraftServer`)

**Returns:** `private static void`

### loadBuiltinLanguages

```java
public static void loadBuiltinLanguages()
```

**Returns:** `public static void`

### loadModLanguages

```java
static void loadModLanguages(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `static void`

### loadLanguage

```java
 loadLanguage()
```

**Returns:** ``
