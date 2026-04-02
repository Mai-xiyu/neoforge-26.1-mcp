# TicketHelper

**Package:** `net.neoforged.neoforge.common.world.chunk`
**Type:** class

## Description

Class to help mods remove no longer valid tickets.

## Methods

### TicketHelper

```java
 TicketHelper(ForcedChunksSavedData saveData, ResourceLocation controllerId, Map<BlockPos, TicketSet> blockTickets, Map<UUID, TicketSet> entityTickets)
```

**Parameters:**

- `saveData` (`ForcedChunksSavedData`)
- `controllerId` (`ResourceLocation`)
- `blockTickets` (`Map<BlockPos, TicketSet>`)
- `entityTickets` (`Map<UUID, TicketSet>`)

**Returns:** ``

### getBlockTickets

```java
public Map<BlockPos, TicketSet> getBlockTickets()
```

**Returns:** `Map<BlockPos, TicketSet>`

### getEntityTickets

```java
public Map<UUID, TicketSet> getEntityTickets()
```

**Returns:** `Map<UUID, TicketSet>`

### removeAllTickets

```java
public void removeAllTickets(BlockPos owner)
```

**Parameters:**

- `owner` (`BlockPos`)

### removeAllTickets

```java
public void removeAllTickets(UUID owner)
```

**Parameters:**

- `owner` (`UUID`)

### removeTicket

```java
public void removeTicket(BlockPos owner, long chunk, boolean ticking)
```

**Parameters:**

- `owner` (`BlockPos`)
- `chunk` (`long`)
- `ticking` (`boolean`)

### removeTicket

```java
public void removeTicket(UUID owner, long chunk, boolean ticking)
```

**Parameters:**

- `owner` (`UUID`)
- `chunk` (`long`)
- `ticking` (`boolean`)

### removeTicket

```java
private <T extends Comparable<? super T>> void removeTicket(ForcedChunkManager.TicketTracker<T> tickets, T owner, long chunk, boolean ticking)
```

**Parameters:**

- `tickets` (`ForcedChunkManager.TicketTracker<T>`)
- `owner` (`T`)
- `chunk` (`long`)
- `ticking` (`boolean`)

**Returns:** `private <T extends Comparable<? super T>> void`
