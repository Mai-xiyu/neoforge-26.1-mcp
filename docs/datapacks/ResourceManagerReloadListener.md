# ResourceManagerReloadListener

**Package:** `net.minecraft.server.packs.resources`
**Type:** interface
**Extends:** `PreparableReloadListener`
**Side:** 🖧 Server

## Methods

### reload

```java
default CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_10752_, ResourceManager p_10753_, ProfilerFiller p_10754_, ProfilerFiller p_10755_, Executor p_10756_, Executor p_10757_)
```

**Parameters:**

- `p_10752_` (`PreparableReloadListener.PreparationBarrier`)
- `p_10753_` (`ResourceManager`)
- `p_10754_` (`ProfilerFiller`)
- `p_10755_` (`ProfilerFiller`)
- `p_10756_` (`Executor`)
- `p_10757_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### onResourceManagerReload

```java
void onResourceManagerReload(ResourceManager p_10758_)
```

**Parameters:**

- `p_10758_` (`ResourceManager`)
