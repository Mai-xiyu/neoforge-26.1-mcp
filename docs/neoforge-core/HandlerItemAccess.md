# HandlerItemAccess

**Package:** `net.neoforged.neoforge.transfer.access`
**Type:** class
**Implements:** `ItemAccess`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `handler` | `ResourceHandler<ItemResource>` |  |
| `index` | `int` |  |

## Methods

### HandlerItemAccess

```java
public HandlerItemAccess(ResourceHandler<ItemResource> handler, int index)
```

**Parameters:**

- `handler` (`ResourceHandler<ItemResource>`)
- `index` (`int`)

**Returns:** `public`

### getResource

```java
public ItemResource getResource()
```

**Returns:** `ItemResource`

### getAmount

```java
public int getAmount()
```

**Returns:** `int`

### insert

```java
public int insert(ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`

### extract

```java
public int extract(ItemResource resource, int amount, TransactionContext transaction)
```

**Parameters:**

- `resource` (`ItemResource`)
- `amount` (`int`)
- `transaction` (`TransactionContext`)

**Returns:** `int`
