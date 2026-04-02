# Network

This category contains 328 class(es).

## minecraft.network

| Class | Type | Description |
|-------|------|-------------|
| [`BandwidthDebugMonitor`](BandwidthDebugMonitor.md) | class |  |
| [`CipherBase`](CipherBase.md) | class |  |
| [`CipherDecoder`](CipherDecoder.md) | class |  |
| [`CipherEncoder`](CipherEncoder.md) | class |  |
| [`ClientboundPacketListener`](ClientboundPacketListener.md) | interface |  |
| [`CompressionDecoder`](CompressionDecoder.md) | class |  |
| [`CompressionEncoder`](CompressionEncoder.md) | class |  |
| [`Connection`](Connection.md) | class |  |
| [`ConnectionProtocol`](ConnectionProtocol.md) | enum |  |
| [`FriendlyByteBuf`](FriendlyByteBuf.md) | class |  |
| [`HandlerNames`](HandlerNames.md) | class |  |
| [`Inbound`](Inbound.md) | class |  |
| [`InboundConfigurationTask`](InboundConfigurationTask.md) | interface |  |
| [`MonitorFrameDecoder`](MonitorFrameDecoder.md) | class |  |
| [`NoOpFrameDecoder`](NoOpFrameDecoder.md) | class |  |
| [`NoOpFrameEncoder`](NoOpFrameEncoder.md) | class |  |
| [`Outbound`](Outbound.md) | class |  |
| [`OutboundConfigurationTask`](OutboundConfigurationTask.md) | interface |  |
| [`PacketBundlePacker`](PacketBundlePacker.md) | class |  |
| [`PacketBundleUnpacker`](PacketBundleUnpacker.md) | class |  |
| [`PacketDecoder`](PacketDecoder.md) | class |  |
| [`PacketEncoder`](PacketEncoder.md) | class |  |
| [`PacketListener`](PacketListener.md) | interface |  |
| [`PacketSendListener`](PacketSendListener.md) | interface |  |
| [`PacketVisitor`](PacketVisitor.md) | interface |  |
| [`ProtocolInfo`](ProtocolInfo.md) | interface |  |
| [`ProtocolSwapHandler`](ProtocolSwapHandler.md) | interface |  |
| [`RateKickingConnection`](RateKickingConnection.md) | class |  |
| [`RegistryFriendlyByteBuf`](RegistryFriendlyByteBuf.md) | class |  |
| [`ServerboundPacketListener`](ServerboundPacketListener.md) | interface |  |
| [`SkipPacketException`](SkipPacketException.md) | class |  |
| [`TickablePacketListener`](TickablePacketListener.md) | interface |  |
| [`Unbound`](Unbound.md) | interface |  |
| [`UnconfiguredPipelineHandler`](UnconfiguredPipelineHandler.md) | class |  |
| [`Utf8String`](Utf8String.md) | class |  |
| [`VarInt`](VarInt.md) | class |  |
| [`Varint21FrameDecoder`](Varint21FrameDecoder.md) | class |  |
| [`Varint21LengthFieldPrepender`](Varint21LengthFieldPrepender.md) | class |  |
| [`VarLong`](VarLong.md) | class |  |

## network.chat

| Class | Type | Description |
|-------|------|-------------|
| [`Action`](Action.md) | class |  |
| [`Action`](Action.md) | enum |  |
| [`ChatDecorator`](ChatDecorator.md) | interface |  |
| [`ClickEvent`](ClickEvent.md) | class |  |
| [`CommonComponents`](CommonComponents.md) | class |  |
| [`Component`](Component.md) | interface |  |
| [`ComponentContents`](ComponentContents.md) | interface |  |
| [`ComponentSerialization`](ComponentSerialization.md) | class |  |
| [`ComponentUtils`](ComponentUtils.md) | class |  |
| [`ContentConsumer`](ContentConsumer.md) | interface |  |
| [`DecodeException`](DecodeException.md) | class |  |
| [`Decoder`](Decoder.md) | interface |  |
| [`Disguised`](Disguised.md) | record |  |
| [`Encoder`](Encoder.md) | interface |  |
| [`EntityTooltipInfo`](EntityTooltipInfo.md) | class |  |
| [`FilterMask`](FilterMask.md) | class |  |
| [`FormattedText`](FormattedText.md) | interface |  |
| [`HoverEvent`](HoverEvent.md) | class |  |
| [`ItemStackInfo`](ItemStackInfo.md) | class |  |
| [`KeyBased`](KeyBased.md) | class |  |
| [`LastSeenMessagesTracker`](LastSeenMessagesTracker.md) | class |  |
| [`LastSeenMessagesValidator`](LastSeenMessagesValidator.md) | class |  |
| [`LegacyConverter`](LegacyConverter.md) | interface |  |
| [`MessageSignatureCache`](MessageSignatureCache.md) | class |  |
| [`MutableComponent`](MutableComponent.md) | class |  |
| [`OutgoingChatMessage`](OutgoingChatMessage.md) | interface |  |
| [`Player`](Player.md) | record |  |
| [`Serializer`](Serializer.md) | class |  |
| [`Serializer`](Serializer.md) | class |  |
| [`SerializerAdapter`](SerializerAdapter.md) | class |  |
| [`SignedMessageChain`](SignedMessageChain.md) | class |  |
| [`SignedMessageValidator`](SignedMessageValidator.md) | interface |  |
| [`Style`](Style.md) | class |  |
| [`StyledContentConsumer`](StyledContentConsumer.md) | interface |  |
| [`SubStringSource`](SubStringSource.md) | class |  |
| [`ThrowingComponent`](ThrowingComponent.md) | class |  |
| [`Type`](Type.md) | record |  |
| [`Update`](Update.md) | record |  |

## chat.contents

| Class | Type | Description |
|-------|------|-------------|
| [`DataSource`](DataSource.md) | interface |  |
| [`KeybindContents`](KeybindContents.md) | class |  |
| [`KeybindResolver`](KeybindResolver.md) | class |  |
| [`LiteralContents`](LiteralContents.md) | record |  |
| [`NbtContents`](NbtContents.md) | class |  |
| [`PlainTextContents`](PlainTextContents.md) | interface |  |
| [`ScoreContents`](ScoreContents.md) | class |  |
| [`SelectorContents`](SelectorContents.md) | class |  |
| [`TranslatableContents`](TranslatableContents.md) | class |  |
| [`TranslatableFormatException`](TranslatableFormatException.md) | class |  |
| [`Type`](Type.md) | record |  |

## chat.numbers

| Class | Type | Description |
|-------|------|-------------|
| [`BlankFormat`](BlankFormat.md) | class |  |
| [`FixedFormat`](FixedFormat.md) | class |  |
| [`NumberFormat`](NumberFormat.md) | interface |  |
| [`NumberFormatType`](NumberFormatType.md) | interface |  |
| [`NumberFormatTypes`](NumberFormatTypes.md) | class |  |
| [`StyledFormat`](StyledFormat.md) | class |  |

## network.codec

| Class | Type | Description |
|-------|------|-------------|
| [`Builder`](Builder.md) | class |  |
| [`ByteBufCodecs`](ByteBufCodecs.md) | interface |  |
| [`CodecOperation`](CodecOperation.md) | interface |  |
| [`IdDispatchCodec`](IdDispatchCodec.md) | class |  |
| [`StreamCodec`](StreamCodec.md) | interface |  |
| [`StreamDecoder`](StreamDecoder.md) | interface |  |
| [`StreamEncoder`](StreamEncoder.md) | interface |  |
| [`StreamMemberEncoder`](StreamMemberEncoder.md) | interface |  |

## network.protocol

| Class | Type | Description |
|-------|------|-------------|
| [`Bundler`](Bundler.md) | interface |  |
| [`BundlerInfo`](BundlerInfo.md) | interface |  |
| [`Packet`](Packet.md) | interface |  |
| [`PacketFlow`](PacketFlow.md) | enum |  |
| [`PacketUtils`](PacketUtils.md) | class |  |
| [`ProtocolCodecBuilder`](ProtocolCodecBuilder.md) | class |  |
| [`ProtocolInfoBuilder`](ProtocolInfoBuilder.md) | class |  |

## protocol.common

| Class | Type | Description |
|-------|------|-------------|
| [`ClientboundKeepAlivePacket`](ClientboundKeepAlivePacket.md) | class |  |
| [`ClientboundPingPacket`](ClientboundPingPacket.md) | class |  |
| [`ClientboundUpdateTagsPacket`](ClientboundUpdateTagsPacket.md) | class |  |
| [`ClientCommonPacketListener`](ClientCommonPacketListener.md) | interface |  |
| [`CommonPacketTypes`](CommonPacketTypes.md) | class |  |
| [`ServerboundKeepAlivePacket`](ServerboundKeepAlivePacket.md) | class |  |
| [`ServerboundPongPacket`](ServerboundPongPacket.md) | class |  |
| [`ServerCommonPacketListener`](ServerCommonPacketListener.md) | interface |  |

## protocol.configuration

| Class | Type | Description |
|-------|------|-------------|
| [`ClientboundFinishConfigurationPacket`](ClientboundFinishConfigurationPacket.md) | class |  |
| [`ClientboundResetChatPacket`](ClientboundResetChatPacket.md) | class |  |
| [`ClientConfigurationPacketListener`](ClientConfigurationPacketListener.md) | interface |  |
| [`ConfigurationPacketTypes`](ConfigurationPacketTypes.md) | class |  |
| [`ConfigurationProtocols`](ConfigurationProtocols.md) | class |  |
| [`ServerboundFinishConfigurationPacket`](ServerboundFinishConfigurationPacket.md) | class |  |
| [`ServerConfigurationPacketListener`](ServerConfigurationPacketListener.md) | interface |  |

## protocol.cookie

| Class | Type | Description |
|-------|------|-------------|
| [`ClientCookiePacketListener`](ClientCookiePacketListener.md) | interface |  |
| [`CookiePacketTypes`](CookiePacketTypes.md) | class |  |
| [`ServerCookiePacketListener`](ServerCookiePacketListener.md) | interface |  |

## protocol.game

| Class | Type | Description |
|-------|------|-------------|
| [`Action`](Action.md) | enum |  |
| [`Action`](Action.md) | enum |  |
| [`Action`](Action.md) | enum |  |
| [`Action`](Action.md) | enum |  |
| [`Action`](Action.md) | enum |  |
| [`Action`](Action.md) | enum |  |
| [`AttributeSnapshot`](AttributeSnapshot.md) | record |  |
| [`BlockEntityTagOutput`](BlockEntityTagOutput.md) | interface |  |
| [`ClientboundAddEntityPacket`](ClientboundAddEntityPacket.md) | class |  |
| [`ClientboundAddExperienceOrbPacket`](ClientboundAddExperienceOrbPacket.md) | class |  |
| [`ClientboundAnimatePacket`](ClientboundAnimatePacket.md) | class |  |
| [`ClientboundBlockDestructionPacket`](ClientboundBlockDestructionPacket.md) | class |  |
| [`ClientboundBlockEntityDataPacket`](ClientboundBlockEntityDataPacket.md) | class |  |
| [`ClientboundBlockEventPacket`](ClientboundBlockEventPacket.md) | class |  |
| [`ClientboundBlockUpdatePacket`](ClientboundBlockUpdatePacket.md) | class |  |
| [`ClientboundBossEventPacket`](ClientboundBossEventPacket.md) | class |  |
| [`ClientboundBundleDelimiterPacket`](ClientboundBundleDelimiterPacket.md) | class |  |
| [`ClientboundBundlePacket`](ClientboundBundlePacket.md) | class |  |
| [`ClientboundChangeDifficultyPacket`](ClientboundChangeDifficultyPacket.md) | class |  |
| [`ClientboundChunkBatchStartPacket`](ClientboundChunkBatchStartPacket.md) | class |  |
| [`ClientboundClearTitlesPacket`](ClientboundClearTitlesPacket.md) | class |  |
| [`ClientboundCommandsPacket`](ClientboundCommandsPacket.md) | class |  |
| [`ClientboundContainerClosePacket`](ClientboundContainerClosePacket.md) | class |  |
| [`ClientboundContainerSetContentPacket`](ClientboundContainerSetContentPacket.md) | class |  |
| [`ClientboundContainerSetDataPacket`](ClientboundContainerSetDataPacket.md) | class |  |
| [`ClientboundContainerSetSlotPacket`](ClientboundContainerSetSlotPacket.md) | class |  |
| [`ClientboundEntityEventPacket`](ClientboundEntityEventPacket.md) | class |  |
| [`ClientboundExplodePacket`](ClientboundExplodePacket.md) | class |  |
| [`ClientboundGameEventPacket`](ClientboundGameEventPacket.md) | class |  |
| [`ClientboundHorseScreenOpenPacket`](ClientboundHorseScreenOpenPacket.md) | class |  |
| [`ClientboundInitializeBorderPacket`](ClientboundInitializeBorderPacket.md) | class |  |
| [`ClientboundLevelChunkPacketData`](ClientboundLevelChunkPacketData.md) | class |  |
| [`ClientboundLevelChunkWithLightPacket`](ClientboundLevelChunkWithLightPacket.md) | class |  |
| [`ClientboundLevelEventPacket`](ClientboundLevelEventPacket.md) | class |  |
| [`ClientboundLevelParticlesPacket`](ClientboundLevelParticlesPacket.md) | class |  |
| [`ClientboundLightUpdatePacket`](ClientboundLightUpdatePacket.md) | class |  |
| [`ClientboundLightUpdatePacketData`](ClientboundLightUpdatePacketData.md) | class |  |
| [`ClientboundMerchantOffersPacket`](ClientboundMerchantOffersPacket.md) | class |  |
| [`ClientboundMoveVehiclePacket`](ClientboundMoveVehiclePacket.md) | class |  |
| [`ClientboundOpenBookPacket`](ClientboundOpenBookPacket.md) | class |  |
| [`ClientboundOpenScreenPacket`](ClientboundOpenScreenPacket.md) | class |  |
| [`ClientboundOpenSignEditorPacket`](ClientboundOpenSignEditorPacket.md) | class |  |
| [`ClientboundPlaceGhostRecipePacket`](ClientboundPlaceGhostRecipePacket.md) | class |  |
| [`ClientboundPlayerAbilitiesPacket`](ClientboundPlayerAbilitiesPacket.md) | class |  |
| [`ClientboundPlayerCombatEndPacket`](ClientboundPlayerCombatEndPacket.md) | class |  |
| [`ClientboundPlayerCombatEnterPacket`](ClientboundPlayerCombatEnterPacket.md) | class |  |
| [`ClientboundPlayerInfoUpdatePacket`](ClientboundPlayerInfoUpdatePacket.md) | class |  |
| [`ClientboundPlayerLookAtPacket`](ClientboundPlayerLookAtPacket.md) | class |  |
| [`ClientboundPlayerPositionPacket`](ClientboundPlayerPositionPacket.md) | class |  |
| [`ClientboundProjectilePowerPacket`](ClientboundProjectilePowerPacket.md) | class |  |
| [`ClientboundRecipePacket`](ClientboundRecipePacket.md) | class |  |
| [`ClientboundRemoveEntitiesPacket`](ClientboundRemoveEntitiesPacket.md) | class |  |
| [`ClientboundRotateHeadPacket`](ClientboundRotateHeadPacket.md) | class |  |
| [`ClientboundSectionBlocksUpdatePacket`](ClientboundSectionBlocksUpdatePacket.md) | class |  |
| [`ClientboundSelectAdvancementsTabPacket`](ClientboundSelectAdvancementsTabPacket.md) | class |  |
| [`ClientboundSetBorderCenterPacket`](ClientboundSetBorderCenterPacket.md) | class |  |
| [`ClientboundSetBorderLerpSizePacket`](ClientboundSetBorderLerpSizePacket.md) | class |  |
| [`ClientboundSetBorderSizePacket`](ClientboundSetBorderSizePacket.md) | class |  |
| [`ClientboundSetBorderWarningDelayPacket`](ClientboundSetBorderWarningDelayPacket.md) | class |  |
| [`ClientboundSetBorderWarningDistancePacket`](ClientboundSetBorderWarningDistancePacket.md) | class |  |
| [`ClientboundSetCameraPacket`](ClientboundSetCameraPacket.md) | class |  |
| [`ClientboundSetCarriedItemPacket`](ClientboundSetCarriedItemPacket.md) | class |  |
| [`ClientboundSetChunkCacheCenterPacket`](ClientboundSetChunkCacheCenterPacket.md) | class |  |
| [`ClientboundSetChunkCacheRadiusPacket`](ClientboundSetChunkCacheRadiusPacket.md) | class |  |
| [`ClientboundSetDefaultSpawnPositionPacket`](ClientboundSetDefaultSpawnPositionPacket.md) | class |  |
| [`ClientboundSetDisplayObjectivePacket`](ClientboundSetDisplayObjectivePacket.md) | class |  |
| [`ClientboundSetEntityLinkPacket`](ClientboundSetEntityLinkPacket.md) | class |  |
| [`ClientboundSetEntityMotionPacket`](ClientboundSetEntityMotionPacket.md) | class |  |
| [`ClientboundSetEquipmentPacket`](ClientboundSetEquipmentPacket.md) | class |  |
| [`ClientboundSetExperiencePacket`](ClientboundSetExperiencePacket.md) | class |  |
| [`ClientboundSetHealthPacket`](ClientboundSetHealthPacket.md) | class |  |
| [`ClientboundSetObjectivePacket`](ClientboundSetObjectivePacket.md) | class |  |
| [`ClientboundSetPassengersPacket`](ClientboundSetPassengersPacket.md) | class |  |
| [`ClientboundSetPlayerTeamPacket`](ClientboundSetPlayerTeamPacket.md) | class |  |
| [`ClientboundSetTimePacket`](ClientboundSetTimePacket.md) | class |  |
| [`ClientboundSetTitlesAnimationPacket`](ClientboundSetTitlesAnimationPacket.md) | class |  |
| [`ClientboundSoundEntityPacket`](ClientboundSoundEntityPacket.md) | class |  |
| [`ClientboundSoundPacket`](ClientboundSoundPacket.md) | class |  |
| [`ClientboundStartConfigurationPacket`](ClientboundStartConfigurationPacket.md) | class |  |
| [`ClientboundStopSoundPacket`](ClientboundStopSoundPacket.md) | class |  |
| [`ClientboundTagQueryPacket`](ClientboundTagQueryPacket.md) | class |  |
| [`ClientboundTakeItemEntityPacket`](ClientboundTakeItemEntityPacket.md) | class |  |
| [`ClientboundTeleportEntityPacket`](ClientboundTeleportEntityPacket.md) | class |  |
| [`ClientboundUpdateAdvancementsPacket`](ClientboundUpdateAdvancementsPacket.md) | class |  |
| [`ClientboundUpdateAttributesPacket`](ClientboundUpdateAttributesPacket.md) | class |  |
| [`ClientboundUpdateMobEffectPacket`](ClientboundUpdateMobEffectPacket.md) | class |  |
| [`ClientboundUpdateRecipesPacket`](ClientboundUpdateRecipesPacket.md) | class |  |
| [`ClientGamePacketListener`](ClientGamePacketListener.md) | interface |  |
| [`DebugEntityNameGenerator`](DebugEntityNameGenerator.md) | class |  |
| [`DebugPackets`](DebugPackets.md) | class |  |
| [`Entry`](Entry.md) | record |  |
| [`GamePacketTypes`](GamePacketTypes.md) | class |  |
| [`GameProtocols`](GameProtocols.md) | class |  |
| [`Handler`](Handler.md) | interface |  |
| [`Handler`](Handler.md) | interface |  |
| [`Parameters`](Parameters.md) | class |  |
| [`Reader`](Reader.md) | interface |  |
| [`ServerboundAcceptTeleportationPacket`](ServerboundAcceptTeleportationPacket.md) | class |  |
| [`ServerboundBlockEntityTagQueryPacket`](ServerboundBlockEntityTagQueryPacket.md) | class |  |
| [`ServerboundChangeDifficultyPacket`](ServerboundChangeDifficultyPacket.md) | class |  |
| [`ServerboundClientCommandPacket`](ServerboundClientCommandPacket.md) | class |  |
| [`ServerboundCommandSuggestionPacket`](ServerboundCommandSuggestionPacket.md) | class |  |
| [`ServerboundConfigurationAcknowledgedPacket`](ServerboundConfigurationAcknowledgedPacket.md) | class |  |
| [`ServerboundContainerClickPacket`](ServerboundContainerClickPacket.md) | class |  |
| [`ServerboundContainerClosePacket`](ServerboundContainerClosePacket.md) | class |  |
| [`ServerboundEntityTagQueryPacket`](ServerboundEntityTagQueryPacket.md) | class |  |
| [`ServerboundInteractPacket`](ServerboundInteractPacket.md) | class |  |
| [`ServerboundJigsawGeneratePacket`](ServerboundJigsawGeneratePacket.md) | class |  |
| [`ServerboundLockDifficultyPacket`](ServerboundLockDifficultyPacket.md) | class |  |
| [`ServerboundMoveVehiclePacket`](ServerboundMoveVehiclePacket.md) | class |  |
| [`ServerboundPaddleBoatPacket`](ServerboundPaddleBoatPacket.md) | class |  |
| [`ServerboundPickItemPacket`](ServerboundPickItemPacket.md) | class |  |
| [`ServerboundPlaceRecipePacket`](ServerboundPlaceRecipePacket.md) | class |  |
| [`ServerboundPlayerAbilitiesPacket`](ServerboundPlayerAbilitiesPacket.md) | class |  |
| [`ServerboundPlayerActionPacket`](ServerboundPlayerActionPacket.md) | class |  |
| [`ServerboundPlayerCommandPacket`](ServerboundPlayerCommandPacket.md) | class |  |
| [`ServerboundPlayerInputPacket`](ServerboundPlayerInputPacket.md) | class |  |
| [`ServerboundRecipeBookChangeSettingsPacket`](ServerboundRecipeBookChangeSettingsPacket.md) | class |  |
| [`ServerboundRecipeBookSeenRecipePacket`](ServerboundRecipeBookSeenRecipePacket.md) | class |  |
| [`ServerboundRenameItemPacket`](ServerboundRenameItemPacket.md) | class |  |
| [`ServerboundSeenAdvancementsPacket`](ServerboundSeenAdvancementsPacket.md) | class |  |
| [`ServerboundSelectTradePacket`](ServerboundSelectTradePacket.md) | class |  |
| [`ServerboundSetCarriedItemPacket`](ServerboundSetCarriedItemPacket.md) | class |  |
| [`ServerboundSetCommandBlockPacket`](ServerboundSetCommandBlockPacket.md) | class |  |
| [`ServerboundSetCommandMinecartPacket`](ServerboundSetCommandMinecartPacket.md) | class |  |
| [`ServerboundSetJigsawBlockPacket`](ServerboundSetJigsawBlockPacket.md) | class |  |
| [`ServerboundSetStructureBlockPacket`](ServerboundSetStructureBlockPacket.md) | class |  |
| [`ServerboundSignUpdatePacket`](ServerboundSignUpdatePacket.md) | class |  |
| [`ServerboundSwingPacket`](ServerboundSwingPacket.md) | class |  |
| [`ServerboundTeleportToEntityPacket`](ServerboundTeleportToEntityPacket.md) | class |  |
| [`ServerboundUseItemOnPacket`](ServerboundUseItemOnPacket.md) | class |  |
| [`ServerboundUseItemPacket`](ServerboundUseItemPacket.md) | class |  |
| [`ServerGamePacketListener`](ServerGamePacketListener.md) | interface |  |
| [`ServerPacketListener`](ServerPacketListener.md) | interface |  |
| [`State`](State.md) | enum |  |
| [`Type`](Type.md) | class |  |
| [`VecDeltaCodec`](VecDeltaCodec.md) | class |  |
| [`Writer`](Writer.md) | interface |  |

## protocol.handshake

| Class | Type | Description |
|-------|------|-------------|
| [`ClientIntent`](ClientIntent.md) | enum |  |
| [`HandshakePacketTypes`](HandshakePacketTypes.md) | class |  |
| [`HandshakeProtocols`](HandshakeProtocols.md) | class |  |
| [`ServerHandshakePacketListener`](ServerHandshakePacketListener.md) | interface |  |

## protocol.login

| Class | Type | Description |
|-------|------|-------------|
| [`ClientboundHelloPacket`](ClientboundHelloPacket.md) | class |  |
| [`ClientboundLoginCompressionPacket`](ClientboundLoginCompressionPacket.md) | class |  |
| [`ClientboundLoginDisconnectPacket`](ClientboundLoginDisconnectPacket.md) | class |  |
| [`ClientLoginPacketListener`](ClientLoginPacketListener.md) | interface |  |
| [`LoginPacketTypes`](LoginPacketTypes.md) | class |  |
| [`LoginProtocols`](LoginProtocols.md) | class |  |
| [`ServerboundKeyPacket`](ServerboundKeyPacket.md) | class |  |
| [`ServerboundLoginAcknowledgedPacket`](ServerboundLoginAcknowledgedPacket.md) | class |  |
| [`ServerLoginPacketListener`](ServerLoginPacketListener.md) | interface |  |

## login.custom

| Class | Type | Description |
|-------|------|-------------|
| [`CustomQueryAnswerPayload`](CustomQueryAnswerPayload.md) | interface |  |
| [`CustomQueryPayload`](CustomQueryPayload.md) | interface |  |

## protocol.ping

| Class | Type | Description |
|-------|------|-------------|
| [`ClientPongPacketListener`](ClientPongPacketListener.md) | interface |  |
| [`PingPacketTypes`](PingPacketTypes.md) | class |  |
| [`ServerboundPingRequestPacket`](ServerboundPingRequestPacket.md) | class |  |
| [`ServerPingPacketListener`](ServerPingPacketListener.md) | interface |  |

## protocol.status

| Class | Type | Description |
|-------|------|-------------|
| [`ClientStatusPacketListener`](ClientStatusPacketListener.md) | interface |  |
| [`ServerboundStatusRequestPacket`](ServerboundStatusRequestPacket.md) | class |  |
| [`ServerStatusPacketListener`](ServerStatusPacketListener.md) | interface |  |
| [`StatusPacketTypes`](StatusPacketTypes.md) | class |  |
| [`StatusProtocols`](StatusProtocols.md) | class |  |

## network.syncher

| Class | Type | Description |
|-------|------|-------------|
| [`Builder`](Builder.md) | class |  |
| [`DataItem`](DataItem.md) | class |  |
| [`DataValue`](DataValue.md) | record |  |
| [`EntityDataSerializer`](EntityDataSerializer.md) | interface |  |
| [`EntityDataSerializers`](EntityDataSerializers.md) | class |  |
| [`ForValueType`](ForValueType.md) | interface |  |
| [`SyncedDataHolder`](SyncedDataHolder.md) | interface |  |
| [`SynchedEntityData`](SynchedEntityData.md) | class |  |

## common.custom

| Class | Type | Description |
|-------|------|-------------|
| [`CustomPacketPayload`](CustomPacketPayload.md) | interface |  |
| [`FallbackProvider`](FallbackProvider.md) | interface |  |
| [`Type`](Type.md) | record |  |
| [`TypeAndCodec`](TypeAndCodec.md) | record |  |

## network.registration

| Class | Type | Description |
|-------|------|-------------|
| [`ChannelAttributes`](ChannelAttributes.md) | class | Utilities for manipulation of Netty Channel attributes |
| [`HandlerThread`](HandlerThread.md) | enum | Used by PayloadRegistrar to declare the default handling thread for registered IPayloadHandlers. |
| [`NetworkRegistry`](NetworkRegistry.md) | class | Core registry for all modded networking. |
| [`PayloadRegistrar`](PayloadRegistrar.md) | class | Builder-style helper for registering CustomPacketPayloads, used for modded networking. |

## neoforge.network

| Class | Type | Description |
|-------|------|-------------|
| [`ConfigurationInitialization`](ConfigurationInitialization.md) | class |  |
| [`DualStackUtils`](DualStackUtils.md) | class |  |
| [`IContainerFactory`](IContainerFactory.md) | interface | This extension of MenuType.MenuSupplier allows a mod to handle the extra data it sent to the client
 |
| [`NetworkInitialization`](NetworkInitialization.md) | class |  |

## network.connection

| Class | Type | Description |
|-------|------|-------------|
| [`ConnectionType`](ConnectionType.md) | enum | Declares categories of connections based on the other side. |
| [`ConnectionUtils`](ConnectionUtils.md) | class | Utility class for storing and retrieving Connection objects from ChannelHandlerContext objects. |

## network.event

| Class | Type | Description |
|-------|------|-------------|
| [`RegisterConfigurationTasksEvent`](RegisterConfigurationTasksEvent.md) | class | Fired when the server configuration packet listener collects all the configuration tasks
that should |
| [`RegisterPayloadHandlersEvent`](RegisterPayloadHandlersEvent.md) | class | Event fired when the NetworkRegistry is being set up. |

## network.negotiation

| Class | Type | Description |
|-------|------|-------------|
| [`ComponentNegotiationResult`](ComponentNegotiationResult.md) | record |  |
| [`NetworkComponentNegotiator`](NetworkComponentNegotiator.md) | class | Negotiates the network components between the server and client. |

## network.handling

| Class | Type | Description |
|-------|------|-------------|
| [`DirectionalPayloadHandler`](DirectionalPayloadHandler.md) | record | Helper class that merges two unidirectional handlers into a single bidirectional handler. |
| [`IPayloadContext`](IPayloadContext.md) | interface | Common context interface for payload handlers. |
| [`IPayloadHandler`](IPayloadHandler.md) | interface | Callback for handling custom packets. |
| [`MainThreadPayloadHandler`](MainThreadPayloadHandler.md) | record | Helper class that always executes the wrapped handler on the main thread. |
| [`QueuedPacket`](QueuedPacket.md) | interface |  |

## network.bundle

| Class | Type | Description |
|-------|------|-------------|
| [`BundlePacketUtils`](BundlePacketUtils.md) | class | Utility class for dealing with net.minecraft.network.protocol.BundlePackets. |
| [`PacketAndPayloadAcceptor`](PacketAndPayloadAcceptor.md) | class |  |

## network.configuration

| Class | Type | Description |
|-------|------|-------------|
| [`ICustomConfigurationTask`](ICustomConfigurationTask.md) | interface | Defines a custom configuration task that should be run when a client connects. |

## network.filters

| Class | Type | Description |
|-------|------|-------------|
| [`DynamicChannelHandler`](DynamicChannelHandler.md) | interface | An extension to the netty ChannelHandler interface that allows for
dynamic injection of handlers int |
| [`GenericPacketSplitter`](GenericPacketSplitter.md) | class | A generic packet splitter that can be used to split packets that are too large to be sent in one go. |
| [`NetworkFilters`](NetworkFilters.md) | class |  |
| [`RemoteCompatibility`](RemoteCompatibility.md) | enum |  |
| [`VanillaConnectionNetworkFilter`](VanillaConnectionNetworkFilter.md) | class | A filter for impl packets, used to filter/modify parts of vanilla impl messages that
will cause erro |
