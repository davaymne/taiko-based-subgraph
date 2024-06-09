import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  BlockProposed as BlockProposedEvent,
  BlockProposed1 as BlockProposed1Event,
  BlockVerified as BlockVerifiedEvent,
  BlockVerified1 as BlockVerified1Event,
  Initialized as InitializedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  ProvingPaused as ProvingPausedEvent,
  ProvingPaused1 as ProvingPaused1Event,
  StateVariablesUpdated as StateVariablesUpdatedEvent,
  StateVariablesUpdated1 as StateVariablesUpdated1Event,
  TransitionContested as TransitionContestedEvent,
  TransitionContested1 as TransitionContested1Event,
  TransitionProved as TransitionProvedEvent,
  TransitionProved1 as TransitionProved1Event,
  Unpaused as UnpausedEvent,
  Upgraded as UpgradedEvent
} from "../generated/TaikoL1/TaikoL1"
import {
  AdminChanged,
  BeaconUpgraded,
  BlockProposed,
  BlockProposed1,
  BlockVerified,
  BlockVerified1,
  Initialized,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Paused,
  ProvingPaused,
  ProvingPaused1,
  StateVariablesUpdated,
  StateVariablesUpdated1,
  TransitionContested,
  TransitionContested1,
  TransitionProved,
  TransitionProved1,
  Unpaused,
  Upgraded
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockProposed(event: BlockProposedEvent): void {
  let entity = new BlockProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.assignedProver = event.params.assignedProver
  entity.livenessBond = event.params.livenessBond
  entity.meta_l1Hash = event.params.meta.l1Hash
  entity.meta_difficulty = event.params.meta.difficulty
  entity.meta_blobHash = event.params.meta.blobHash
  entity.meta_extraData = event.params.meta.extraData
  entity.meta_depositsHash = event.params.meta.depositsHash
  entity.meta_coinbase = event.params.meta.coinbase
  entity.meta_id = event.params.meta.id
  entity.meta_gasLimit = event.params.meta.gasLimit
  entity.meta_timestamp = event.params.meta.timestamp
  entity.meta_l1Height = event.params.meta.l1Height
  entity.meta_minTier = event.params.meta.minTier
  entity.meta_blobUsed = event.params.meta.blobUsed
  entity.meta_parentMetaHash = event.params.meta.parentMetaHash
  entity.meta_sender = event.params.meta.sender
  entity.depositsProcessed = event.params.depositsProcessed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockProposed1(event: BlockProposed1Event): void {
  let entity = new BlockProposed1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.assignedProver = event.params.assignedProver
  entity.livenessBond = event.params.livenessBond
  entity.meta_l1Hash = event.params.meta.l1Hash
  entity.meta_difficulty = event.params.meta.difficulty
  entity.meta_blobHash = event.params.meta.blobHash
  entity.meta_extraData = event.params.meta.extraData
  entity.meta_depositsHash = event.params.meta.depositsHash
  entity.meta_coinbase = event.params.meta.coinbase
  entity.meta_id = event.params.meta.id
  entity.meta_gasLimit = event.params.meta.gasLimit
  entity.meta_timestamp = event.params.meta.timestamp
  entity.meta_l1Height = event.params.meta.l1Height
  entity.meta_minTier = event.params.meta.minTier
  entity.meta_blobUsed = event.params.meta.blobUsed
  entity.meta_parentMetaHash = event.params.meta.parentMetaHash
  entity.meta_sender = event.params.meta.sender
  entity.depositsProcessed = event.params.depositsProcessed

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockVerified(event: BlockVerifiedEvent): void {
  let entity = new BlockVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.prover = event.params.prover
  entity.blockHash = event.params.blockHash
  entity.stateRoot = event.params.stateRoot
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlockVerified1(event: BlockVerified1Event): void {
  let entity = new BlockVerified1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.prover = event.params.prover
  entity.blockHash = event.params.blockHash
  entity.stateRoot = event.params.stateRoot
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvingPaused(event: ProvingPausedEvent): void {
  let entity = new ProvingPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProvingPaused1(event: ProvingPaused1Event): void {
  let entity = new ProvingPaused1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateVariablesUpdated(
  event: StateVariablesUpdatedEvent
): void {
  let entity = new StateVariablesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.slotB_numBlocks = event.params.slotB.numBlocks
  entity.slotB_lastVerifiedBlockId = event.params.slotB.lastVerifiedBlockId
  entity.slotB_provingPaused = event.params.slotB.provingPaused
  entity.slotB___reservedB1 = event.params.slotB.__reservedB1
  entity.slotB___reservedB2 = event.params.slotB.__reservedB2
  entity.slotB___reservedB3 = event.params.slotB.__reservedB3
  entity.slotB_lastUnpausedAt = event.params.slotB.lastUnpausedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateVariablesUpdated1(
  event: StateVariablesUpdated1Event
): void {
  let entity = new StateVariablesUpdated1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.slotB_numBlocks = event.params.slotB.numBlocks
  entity.slotB_lastVerifiedBlockId = event.params.slotB.lastVerifiedBlockId
  entity.slotB_provingPaused = event.params.slotB.provingPaused
  entity.slotB___reservedB1 = event.params.slotB.__reservedB1
  entity.slotB___reservedB2 = event.params.slotB.__reservedB2
  entity.slotB___reservedB3 = event.params.slotB.__reservedB3
  entity.slotB_lastUnpausedAt = event.params.slotB.lastUnpausedAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionContested(
  event: TransitionContestedEvent
): void {
  let entity = new TransitionContested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.contester = event.params.contester
  entity.contestBond = event.params.contestBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionContested1(
  event: TransitionContested1Event
): void {
  let entity = new TransitionContested1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.contester = event.params.contester
  entity.contestBond = event.params.contestBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionProved(event: TransitionProvedEvent): void {
  let entity = new TransitionProved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.prover = event.params.prover
  entity.validityBond = event.params.validityBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransitionProved1(event: TransitionProved1Event): void {
  let entity = new TransitionProved1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.blockId = event.params.blockId
  entity.tran_parentHash = event.params.tran.parentHash
  entity.tran_blockHash = event.params.tran.blockHash
  entity.tran_stateRoot = event.params.tran.stateRoot
  entity.tran_graffiti = event.params.tran.graffiti
  entity.prover = event.params.prover
  entity.validityBond = event.params.validityBond
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}