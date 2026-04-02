# AdvancementProvider

**Package:** `net.neoforged.neoforge.common.data`
**Type:** class
**Extends:** `net.minecraft.data.advancements.AdvancementProvider`

## Description

An extension of the vanilla `AdvancementProvider` to provide a feature-complete
experience to generate modded advancements.

## Methods

### AdvancementProvider

```java
public public AdvancementProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, ExistingFileHelper existingFileHelper, List<AdvancementGenerator> subProviders)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)
- `existingFileHelper` (`ExistingFileHelper`)
- `subProviders` (`List<AdvancementGenerator>`)

**Returns:** `public`

### generate

```java
public void generate(HolderLookup.Provider registries, Consumer<AdvancementHolder> saver, ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `registries` (`HolderLookup.Provider`)
- `saver` (`Consumer<AdvancementHolder>`)
- `existingFileHelper` (`ExistingFileHelper`)

### toSubProvider

```java
default AdvancementSubProvider toSubProvider(ExistingFileHelper existingFileHelper)
```

**Parameters:**

- `existingFileHelper` (`ExistingFileHelper`)

**Returns:** `AdvancementSubProvider`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AdvancementGenerator` | interface |  |
