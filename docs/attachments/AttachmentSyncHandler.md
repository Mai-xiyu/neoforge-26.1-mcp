# AttachmentSyncHandler

**Package:** `net.neoforged.neoforge.attachment`
**Type:** interface<T>

## Description

Manages how data attachments are written (on the server) and read (on the client) from packets.


Sync is handled automatically in the following cases:

A client is receiving initial data for this attachment holder.
An attachment is default-created through `IAttachmentHolder#getData(AttachmentType)`.
An attachment is updated through `IAttachmentHolder#setData(AttachmentType, Object)`.
An attachment is removed through `IAttachmentHolder#removeData(AttachmentType)`.



For other cases such as modifications to mutable synced attachments,
`IAttachmentHolder#syncData(AttachmentType)` can be called to trigger syncing.

## Methods

### sendToPlayer

```java
default boolean sendToPlayer(IAttachmentHolder holder, ServerPlayer to)
```

**Parameters:**

- `holder` (`IAttachmentHolder`)
- `to` (`ServerPlayer`)

**Returns:** `boolean`

### write

```java
void write(RegistryFriendlyByteBuf buf, T attachment, boolean initialSync)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)
- `attachment` (`T`)
- `initialSync` (`boolean`)

### read

```java
T read(IAttachmentHolder holder, RegistryFriendlyByteBuf buf, T previousValue)
```

**Parameters:**

- `holder` (`IAttachmentHolder`)
- `buf` (`RegistryFriendlyByteBuf`)
- `previousValue` (`T`)

**Returns:** `T`
