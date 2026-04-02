# IAttachmentCopyHandler

**Package:** `net.neoforged.neoforge.attachment`
**Type:** interface<T>

## Description

Custom copy handler for data attachments, to improve efficiency compared to the default
serialize-deserialize-implementation.

## Methods

### copy

```java
T copy(T attachment, IAttachmentHolder holder, HolderLookup.Provider provider)
```

**Parameters:**

- `attachment` (`T`)
- `holder` (`IAttachmentHolder`)
- `provider` (`HolderLookup.Provider`)

**Returns:** `T`
