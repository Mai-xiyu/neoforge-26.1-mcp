# ReloadListenerSort

**Package:** `net.neoforged.neoforge.resource`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### sort

```java
public static List<PreparableReloadListener> sort(SortedReloadListenerEvent event)
```

**Parameters:**

- `event` (`SortedReloadListenerEvent`)

**Returns:** `List<PreparableReloadListener>`

### sortListeners

```java
public static List<PreparableReloadListener> sortListeners(NameLookup lookup, MutableGraph<PreparableReloadListener> graph, Map<Identifier, PreparableReloadListener> registry, PreparableReloadListener lastVanilla)
```

**Parameters:**

- `lookup` (`NameLookup`)
- `graph` (`MutableGraph<PreparableReloadListener>`)
- `registry` (`Map<Identifier, PreparableReloadListener>`)
- `lastVanilla` (`PreparableReloadListener`)

**Returns:** `List<PreparableReloadListener>`

### isVanilla

```java
private static boolean isVanilla(NameLookup lookup, PreparableReloadListener listener)
```

**Parameters:**

- `lookup` (`NameLookup`)
- `listener` (`PreparableReloadListener`)

**Returns:** `private static boolean`
