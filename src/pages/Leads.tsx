import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/StatusBadge';
import { mockLeads } from '@/data/mockLeads';
import { LeadStage, STAGE_LABELS } from '@/types/lead';
import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';

const Leads = () => {
  const [selectedStage, setSelectedStage] = useState<LeadStage | 'all'>('all');

  const filteredLeads = selectedStage === 'all' 
    ? mockLeads 
    : mockLeads.filter(lead => lead.stage === selectedStage);

  const stages: Array<{ value: LeadStage | 'all'; label: string }> = [
    { value: 'all', label: 'All Leads' },
    { value: 'initial_review', label: STAGE_LABELS.initial_review },
    { value: 'stage_1', label: STAGE_LABELS.stage_1 },
    { value: 'stage_2', label: STAGE_LABELS.stage_2 },
    { value: 'closing', label: STAGE_LABELS.closing }
  ];

  const getNextStage = (currentStage: LeadStage): LeadStage | null => {
    const stageOrder: LeadStage[] = ['initial_review', 'stage_1', 'stage_2', 'closing'];
    const currentIndex = stageOrder.indexOf(currentStage);
    return currentIndex < stageOrder.length - 1 ? stageOrder[currentIndex + 1] : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Leads Management</h1>
          <p className="text-muted-foreground">View and manage all your leads</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Leads</CardTitle>
            <CardDescription>
              {filteredLeads.length} {filteredLeads.length === 1 ? 'lead' : 'leads'} 
              {selectedStage !== 'all' && ` in ${STAGE_LABELS[selectedStage as LeadStage]}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedStage} onValueChange={(value) => setSelectedStage(value as LeadStage | 'all')}>
              <TabsList className="mb-4">
                {stages.map(stage => (
                  <TabsTrigger key={stage.value} value={stage.value}>
                    {stage.label}
                    <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full">
                      {stage.value === 'all' 
                        ? mockLeads.length 
                        : mockLeads.filter(l => l.stage === stage.value).length}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedStage} className="mt-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Company</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Current Revenue</TableHead>
                        <TableHead>Stage</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLeads.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                            No leads found
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredLeads.map(lead => {
                          const nextStage = getNextStage(lead.stage);
                          return (
                            <TableRow key={lead.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">{lead.name}</p>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                    <Globe className="h-3 w-3" />
                                    <span>{lead.website}</span>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1 text-xs">
                                    <Mail className="h-3 w-3 text-muted-foreground" />
                                    <span>{lead.email}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-xs">
                                    <Phone className="h-3 w-3 text-muted-foreground" />
                                    <span>{lead.phone}</span>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <span className="font-medium">
                                  ${(lead.currentRevenue / 1000).toFixed(0)}K
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="text-sm font-medium">
                                  {STAGE_LABELS[lead.stage]}
                                </span>
                              </TableCell>
                              <TableCell>
                                <StatusBadge status={lead.status} />
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {lead.updatedAt.toLocaleDateString()}
                              </TableCell>
                              <TableCell className="text-right">
                                {lead.status === 'qualified' && nextStage && (
                                  <Button size="sm" variant="outline">
                                    Move to {STAGE_LABELS[nextStage]}
                                    <ArrowRight className="ml-2 h-3 w-3" />
                                  </Button>
                                )}
                                {lead.status === 'pending' && (
                                  <div className="flex gap-2 justify-end">
                                    <Button size="sm" variant="outline" className="text-success border-success hover:bg-success hover:text-success-foreground">
                                      Qualify
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                                      Reject
                                    </Button>
                                  </div>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leads;
