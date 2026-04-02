# CreativeModeTabSearchRegistry

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client

## Methods

### getNameSearchKeys

```java
public static Map<CreativeModeTab, SessionSearchTrees.Key> getNameSearchKeys()
```

**Returns:** `public static Map<CreativeModeTab, SessionSearchTrees.Key>`

### getTagSearchKeys

```java
public static Map<CreativeModeTab, SessionSearchTrees.Key> getTagSearchKeys()
```

**Returns:** `public static Map<CreativeModeTab, SessionSearchTrees.Key>`

### getNameSearchKey

```java
public static SessionSearchTrees.Key getNameSearchKey(CreativeModeTab tab)
```

**Parameters:**

- `tab` (`CreativeModeTab`)

**Returns:** `SessionSearchTrees.Key`

### getTagSearchKey

```java
public static SessionSearchTrees.Key getTagSearchKey(CreativeModeTab tab)
```

**Parameters:**

- `tab` (`CreativeModeTab`)

**Returns:** `SessionSearchTrees.Key`

### getNameSearchTree

```java
public static CompletableFuture<SearchTree<ItemStack>> getNameSearchTree(SessionSearchTrees.Key key)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)

**Returns:** `public static CompletableFuture<SearchTree<ItemStack>>`

### putNameSearchTree

```java
public static void putNameSearchTree(SessionSearchTrees.Key key, CompletableFuture<SearchTree<ItemStack>> future)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)
- `future` (`CompletableFuture<SearchTree<ItemStack>>`)

**Returns:** `public static void`

### getTagSearchTree

```java
public static CompletableFuture<SearchTree<ItemStack>> getTagSearchTree(SessionSearchTrees.Key key)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)

**Returns:** `public static CompletableFuture<SearchTree<ItemStack>>`

### putTagSearchTree

```java
public static void putTagSearchTree(SessionSearchTrees.Key key, CompletableFuture<SearchTree<ItemStack>> future)
```

**Parameters:**

- `key` (`SessionSearchTrees.Key`)
- `future` (`CompletableFuture<SearchTree<ItemStack>>`)

**Returns:** `public static void`
