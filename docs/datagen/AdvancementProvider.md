# AdvancementProvider

**Package:** `net.minecraft.data.advancements`
**Type:** class
**Implements:** `DataProvider`
**Annotations:** `@Deprecated`

## Description

@deprecated NeoForge: Use `net.neoforged.neoforge.common.data.AdvancementProvider` instead,
provides ease of access for the `net.neoforged.neoforge.common.data.ExistingFileHelper` in the generator

## Methods

### AdvancementProvider

```java
public AdvancementProvider(PackOutput p_256529_, CompletableFuture<HolderLookup.Provider> p_255722_, List<AdvancementSubProvider> p_255883_)
```

**Parameters:**

- `p_256529_` (`PackOutput`)
- `p_255722_` (`CompletableFuture<HolderLookup.Provider>`)
- `p_255883_` (`List<AdvancementSubProvider>`)

**Returns:** `public`

### run

```java
public CompletableFuture<?> run(CachedOutput p_254268_)
```

**Parameters:**

- `p_254268_` (`CachedOutput`)

**Returns:** `CompletableFuture<?>`

### getName

```java
public final String getName()
```

**Returns:** `String`
