# IAdvancementBuilderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Advancement.Builder self()
```

**Returns:** `private Advancement.Builder`

### save

```java
default AdvancementHolder save(Consumer<AdvancementHolder> saver, ResourceLocation id, ExistingFileHelper fileHelper)
```

**Parameters:**

- `saver` (`Consumer<AdvancementHolder>`)
- `id` (`ResourceLocation`)
- `fileHelper` (`ExistingFileHelper`)

**Returns:** `AdvancementHolder`
