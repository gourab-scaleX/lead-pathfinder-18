import { Badge } from '@/components/ui/badge';
import { LeadStatus, STATUS_LABELS } from '@/types/lead';

interface StatusBadgeProps {
  status: LeadStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const variants: Record<LeadStatus, string> = {
    pending: 'bg-muted text-muted-foreground',
    qualified: 'bg-success text-success-foreground',
    disqualified: 'bg-destructive text-destructive-foreground',
    won: 'bg-success text-success-foreground',
    lost: 'bg-destructive text-destructive-foreground'
  };

  return (
    <Badge className={variants[status]}>
      {STATUS_LABELS[status]}
    </Badge>
  );
};
