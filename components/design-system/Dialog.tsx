"use client";

import { 
  Dialog as BaseDialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal
} from "@/components/ui-base/dialog";
import { withFeatureFlag } from "@/components/wrapper/withFeatureFlag";

const WrappedDialog = withFeatureFlag(BaseDialog, "Dialog");
const WrappedDialogTrigger = withFeatureFlag(DialogTrigger, "Dialog");
const WrappedDialogContent = withFeatureFlag(DialogContent, "Dialog");
const WrappedDialogHeader = withFeatureFlag(DialogHeader, "Dialog");
const WrappedDialogFooter = withFeatureFlag(DialogFooter, "Dialog");
const WrappedDialogTitle = withFeatureFlag(DialogTitle, "Dialog");
const WrappedDialogDescription = withFeatureFlag(DialogDescription, "Dialog");
const WrappedDialogClose = withFeatureFlag(DialogClose, "Dialog");
const WrappedDialogOverlay = withFeatureFlag(DialogOverlay, "Dialog");
const WrappedDialogPortal = withFeatureFlag(DialogPortal, "Dialog");

export { 
  WrappedDialog as Dialog,
  WrappedDialogTrigger as DialogTrigger,
  WrappedDialogContent as DialogContent,
  WrappedDialogHeader as DialogHeader,
  WrappedDialogFooter as DialogFooter,
  WrappedDialogTitle as DialogTitle,
  WrappedDialogDescription as DialogDescription,
  WrappedDialogClose as DialogClose,
  WrappedDialogOverlay as DialogOverlay,
  WrappedDialogPortal as DialogPortal
};

