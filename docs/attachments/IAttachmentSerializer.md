# IAttachmentSerializer

**Package:** `net.neoforged.neoforge.attachment`
**Type:** interface<S extends Tag, T>

## Description

Serializer for data attachments.


The `#read(IAttachmentHolder, Tag, HolderLookup.Provider)` method must be implemented by subclasses!
@param <S> A `Tag` subclass: the serialized representation.
@param <T> The type of the data attachment.

## Methods

### read

```java
T read(IAttachmentHolder holder, S tag, HolderLookup.Provider provider)
```

**Parameters:**

- `holder` (`IAttachmentHolder`)
- `tag` (`S`)
- `provider` (`HolderLookup.Provider`)

**Returns:** `T`

### write

```java
S write(T attachment, HolderLookup.Provider provider)
```

**Parameters:**

- `attachment` (`T`)
- `provider` (`HolderLookup.Provider`)

**Returns:** `S`
